import React, { useState } from "react";
import Button from "../../ui/Button";
import "../../../contans/styles/log.scss";
function VerifyOTP({ value, valueLength, onChange }) {
  return (
    <div className="otp-group">
      {[1, 2, 3, 4].map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className="otp-input"
          value={digit}
        />
      ))}
    </div>
  );
}

export default VerifyOTP;
