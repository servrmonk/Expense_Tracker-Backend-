import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  { UserContext } from "./store/context";
import Navbar from "./components/Navbar";
import SignupPage from "./components/SignupPage";
import { useContext } from "react";

function App() {
  const { login } = useContext(UserContext);
  const value  = useContext(UserContext);
  // console.log("Value of usecontext ",login);


  return (
    
      <BrowserRouter>
        <Routes>
          {login ? (
            <>
              <Route path="/" element={<Navigate to="/userExpense" />} />
              <Route path="/userExpense" element={<Navbar />} />
            </>
          ) : (
            <>
              <Route path="/" element={<SignupPage />} />
            </>
          )}
          <Route path="*" element={<SignupPage />} />
        </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
