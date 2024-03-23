import React from "react";
import "../../styles/home.css";
import MyInput from "../../components/MyInput";
import MyButon from "../../components/MyButon";

const login = ({
  number,
  handleChangeStatus,
  setNumber,
  pageValue,
  setOtp,
  otp,
  loginHandler,
}) => {
  return (
    <div className="mainLogin_container">
      <div className="login-div">
        <MyInput
          title={number.length != "10" ? "Enter Your Number" : "Send OTP"}
          onChange={
            pageValue
              ? (e) => setOtp(e.target.value)
              : (e) => setNumber(e.target.value)
          }
          value={pageValue ? otp : number}
          placeholder={pageValue ? "Please Enter OTP" : "Enter Your Number"}
          type="number"
        />

        {pageValue ? (
          <MyButon
            title="Login"
            style={{ background: otp.length == "6" ? "green" : "red" }}
            onClick={loginHandler}
            disabled={otp.length == "6" ? false : true}
          />
        ) : (
          <MyButon
            title={"Send Otp"}
            style={{ background: number.length == "10" ? "green" : "red" }}
            onClick={handleChangeStatus}
            disabled={number.length == "10" ? false : true}
          />
        )}
      </div>
    </div>
  );
  // onClick={pageValue ? loginHandler : handleChangeStatus}
};

export default login;
