import React, { useState } from "react";
import axios from "axios";
import Button from "../../ui/Button";
import "../../../contans/styles/log.scss";
import OTPInput from "./OTPInput";
function VerifyOTP() {
  const [message, setMessage] = useState("");
  const handleOTPComplete = async (enteredOTP) => {
    try {
      // Send entered OTP to the server for verification
      const response = await axios.post("/api/verify-otp", { otp: enteredOTP });

      if (response.data.success) {
        setMessage("OTP is valid. Access granted.");
      } else {
        setMessage("OTP is invalid. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("An error occurred while verifying OTP.");
    }
  };
  return (
    <div className="item-right-form">
      <OTPInput length={4} onComplete={handleOTPComplete} />
      <p>{message}</p>
      <Button>Tiếp Tục</Button>
    </div>
  );
}

export default VerifyOTP;
