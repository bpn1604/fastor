import React, { useState } from "react";
import { Home, Hotel, Login, Otp } from "./pages";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myData from "./Data/myData.json";

const App = () => {
  const [data, setData] = useState([]);
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [pageValue, setPageValue] = useState(false);
  const [login, setLogin] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChangeStatus = () => {
    setPageValue(true);
  };

  const loginHandler = () => {
    if (otp == "123456") {
      setLogin(true);
    } else {
      toast.error("Please Enter Valid Otp");
    }
  };

  const handleLogout = () => {
    setLogin(false);
    setPageValue(false);
    setNumber("")
    setOtp("")
  };

  return (
    <div className="main-container">
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />
      
        <Routes>
          <Route
            path={"/"}
            element={
              login ? (
                <Home
                  myData={myData}
                  setData={setData}
                  data={data}
                  setInputValue={setInputValue}
                  inputValue={inputValue}
                  handleLogout={handleLogout}
                />
              ) : (
                <Login
                  setNumber={setNumber}
                  pageValue={pageValue}
                  handleChangeStatus={handleChangeStatus}
                  number={number}
                  setOtp={setOtp}
                  otp={otp}
                  loginHandler={loginHandler}
                />
              )
            }
          />
          <Route
            path="/hotel/:id"
            element={<Hotel data={data} setInputValue={setInputValue} />}
          />
        </Routes>
      
    </div>
  );
};

export default App;

{
  /* {login ? (
  <Home />
) : (
  <Login
    setNumber={setNumber}
    pageValue={pageValue}
    handleChangeStatus={handleChangeStatus}
    number={number}
    setOtp={setOtp}
    otp={otp}
    loginHandler={loginHandler}
  />
)}
 <Otp /> */
}
