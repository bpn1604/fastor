import React from "react";
import "../../styles/home.css";

const Login = ({
  number,
  handleChangeStatus,
  setNumber,
  pageValue,
  setOtp,
  otp,
  loginHandler,
}) => {
  const handleInputChange = (e) => {
    pageValue ? setOtp(e.target.value) : setNumber(e.target.value);
  };

  const handleButtonClick = () => {
    pageValue ? loginHandler() : handleChangeStatus();
  };

  return (
    <div className="mainLogin_container">
      <div className="login-div">
        <span>{number.length !== 10 ? "Enter Your Number" : "Send OTP"}</span>
        <input
          value={pageValue ? otp : number}
          type="number"
          placeholder={pageValue ? "Please Enter OTP" : "Enter Your Number"}
          onChange={handleInputChange}
        />

        <button
          className="btn"
          
          onClick={handleButtonClick}
          disabled={pageValue ? otp.length !== 6 : number.length !== 10}
        >
          {pageValue ? "Login" : "Send OTP"}
        </button>
      </div>
    </div>
  );
};

export default Login;
