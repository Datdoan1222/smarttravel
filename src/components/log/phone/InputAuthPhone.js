import React from "react";
import { Controller } from "react-hook-form";

import "../../../contans/styles/InputAuthPhone.scss"; // Import CSS hoặc định nghĩa các lớp CSS ở đây

function InputAuthPhone({
  nameIcon,
  label = "",
  textInputConfig,
  control,
  errors = "",
}) {
  const inputStyles = errors[label] ? "inputInvalid" : "";

  return (
    <div className={`inputContainer ${inputStyles}`}>
      <Controller
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          // console.log(value)
          <input
            className={`inputs ${errors[label] && "invalidLabel"}`}
            {...textInputConfig}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            invalid={!!errors[label]}
          />
        )}
        name={label}
        rules={{ required: true, maxLength: 80 }}
      />
      <div className="icons">
        {/* <i className={`icon ${errors[label] && "invalidLabel"}`}>{nameIcon}</i> */}
      </div>
    </div>
  );
}

export default InputAuthPhone;
