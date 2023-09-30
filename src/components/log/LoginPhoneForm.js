import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../ui/Button";

function LoginPhoneForm() {
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input {...field} type="text" placeholder="Phone Number" />
          )}
        />
        {/* {errors.phoneNumber ? <span>This field is required</span> : ""} */}
      </div>
      <Button>Lấy Mã OTP</Button>
    </div>
  );
}

export default LoginPhoneForm;
