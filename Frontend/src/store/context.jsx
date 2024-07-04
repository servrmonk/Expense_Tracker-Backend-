import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3002",
});

const UserContextProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("idToken") || false);

  const [userExpense, setUserExpense] = useState([]);
  const [user_id, setUserId] = useState(
    localStorage.getItem("user_id") || null
  );

  const addExpense = async (obj) => {
    console.log("User_id is ", user_id);
    console.log("ob", obj);
    try {
      const response = await axiosInstance.post(
        `/expense/createExpense/${user_id}`,
        obj
      );
      setUserExpense((exp) => [...exp, obj]);
    } catch (error) {
      console.log("Error in postData", error);
    }
  };

  const deleteExpense = async (expenseId) => {
    console.log("expense id for delete", expenseId);
    try {
      const response = await axiosInstance.delete(
        `/expense/deleteExpense/${expenseId}`
      );
      // setUserExpense((exp) => exp.filter((expense) => expense.id !== expenseId));
    } catch (error) {
      console.log("Error in postData", error);
    }
  };
  const editExpense = async (id, updatedExpense) => {
    try {
      const response = await axiosInstance.put(`/expense/updateExpense/${id}`, updatedExpense);
      setUserExpense((exp) =>
        exp.map((expense) => (expense.id === id ? { ...expense, ...updatedExpense } : expense))
      );
    } catch (error) {
      console.log("Error in update expense", error);
    }
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axiosInstance.get(`/expense/getExpenseById/${user_id}`);
        setUserExpense(response.data);
        console.log("response in useeffect ", response.data);
      } catch (error) {
        console.error("Failed to fetch expenses", error);
      }
    };
    fetchExpenses();
  }, []);
  const Logout = () => {
    setLogin(false);
    localStorage.removeItem("idToken");
  };

  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        userExpense,
        addExpense,
        deleteExpense,
        editExpense,
        Logout,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
