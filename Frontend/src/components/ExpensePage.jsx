import React, { useRef, useState } from "react";

export default function ExpensePage() {
  const expenseAmount = useRef(null);
  const description = useRef(null);
  const category = useRef(null);
  const date = useRef(null);
  const [expense, setExpense] = useState([]);

  // DELETE THE VALUE FROM UI AS WELL AS DB
  const deleteHandler = (items) => {
    //delete from ui
    const filteredElem = expense.filter((elem) => elem !== items);
    setExpense(filteredElem);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("inside submit handler ");
  };

  return (
    <>
      <div className="flex justify-start">
        <br />
        {/* EXPENSE TRACKER FORM START */}
        <div className=" mr-[40%] ml-3 mt-10 shadow-2xl   w-[35%] h-[310px] max-h-[500px] rounded-xl p-2 bg-neutral-100">
          <form action="submit" onSubmit={submitHandler}>
            <input
              className="mx-7 rounded-2xl hover:bg-transparent  shadow-inner mt-3 bg-slate-200 p-2 text-xl  font-serif w-[90%] "
              required
              placeholder="Enter Expense Amount"
              type="number"
              ref={expenseAmount}
            />
            <br />

            <input
              className="mx-7 rounded-2xl mt-3 mb-3 hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[90%] "
              required
              type="text"
              placeholder="Description of Expense"
              ref={description}
            />
            <br />
            <label
              className="mx-7 mb-1 mt-0 rounded-xl  hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[90%] "
              htmlFor="cars"
            >
              Category:
            </label>
            <select
              className=" mb-1  rounded-xl  hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[20%]"
              ref={category}
              name="cars"
              id="cars"
            >
              <option value="food">Food</option>
              <option value="petrol">Petrol</option>
              <option value="party">Party</option>
              <option value="others">Others</option>
            </select>
            <br />
            <input
              className="mx-7 rounded-2xl mt-3 hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[90%] "
              required
              ref={date}
              type="date"
              placeholder="dd-mm-yyyy"
            />
            <br />

            <button
              type="submit"
              className="mt-3  ml-[35%] text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Expenses
            </button>
          </form>
        </div>

        {/* RIGHT PART TOTAL EXPENSE PART START */}

        <div className="max-h-fit h-fit bg-neutral-100 mt-8 hover:p-10 hover:bg-slate-50 w-auto max-w-fit  shadow-2xl rounded-xl p-4">
          <h1 className="text-2xl  font-semibold hover:text-3xl hover:text-green-950 p-2 underline">
            Total Expenses
          </h1>
          <p className="w-[90%] h-9 rounded-xl p-1 text-center bg-gradient-to-r from-orange-300 via-gray-600 to-green-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80  text-white font-semibold  bg-green-400 m-auto text-xl hover:cursor-not-allowed">
            {/* Rs. {sumAllExp} */}
            Rs. 90
          </p>
        </div>
      </div>
    </>
  );
}
