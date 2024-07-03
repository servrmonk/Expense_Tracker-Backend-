import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  
  const [login, setLogin] = useState(localStorage.getItem("idToken")||false);
  const [userExpense, setUserExpense] = useState([]);
  

  const addExpense = (data) => {
    setUserExpense((exp) => [...exp, data]);
  };

  const deleteExpense = (id) => {
    // setUserExpense((exp) => exp.filter((expense) => expense.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    // setUserExpense((exp) =>
    //   exp.map((expense) =>
    //     expense.id === id ? { ...expense, ...updatedExpense } : expense
    //   )
    // );
  };

  // useEffect(() => {
  //   const fetchExpenses = async () => {
  //     try {
  //       const response = await axios.get("/api/expenses");
  //       setUserExpense(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch expenses", error);
  //     }
  //   };
  //   fetchExpenses();
  // }, []);
  const Logout = () => {
    setLogin(false);
    localStorage.removeItem('idToken')
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
        Logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
