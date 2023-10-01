import React, { useState } from "react";
import "../../../contans/styles/otp.scss";
function OTPInput({ length, onComplete }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const handleChange = (e, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;

    setOtp(updatedOtp);

    if (updatedOtp.every((digit) => digit !== "")) {
      const enteredOTP = updatedOtp.join("");
      onComplete(enteredOTP);
    }
  };
  return (
    <div className="OTPInput">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
      <p className="message">{message}</p>
    </div>
  );
}

export default OTPInput;
