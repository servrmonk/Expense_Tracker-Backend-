// import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ExpensePage from "./ExpensePage";
import { UserContext } from "../store/context";

function Navbar() {
  const { Logout } = useContext(UserContext);
  const navigate = useNavigate()
  const handleLogout = () => {
    Logout();  
    navigate('/login');
  };
  
  return (
    <>
      <div className="max-w-[auto] flex justify-between bg-slate-300 p-3  shadow-lg shadow-indigo-500/40 ">
        <p className="text-2xl font-serif"> Welcome to Expense Tracker</p>
        <div className="flex mx-1">
         
          <button
          onClick={()=>handleLogout()}
            type="button"
            className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Logout
          </button>
        </div>
      </div>
      <ExpensePage />
    </>
  );
}

export default Navbar;
