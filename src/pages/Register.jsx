import React from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const sendForm = (formularyData) => {
    const formData = new FormData();

    formData.append("name", formularyData.name);
    formData.append("email", formularyData.email);
    formData.append("password", formularyData.password);
    formData.append("favoriteMovie", formularyData.favoriteMovie);
    console.log(sendForm);
  };

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <label>
        User name
        <input type="text" {...register("userName", { required: true })} />
      </label>
      <label>
        Email
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}
        />
      </label>
      <button>Enviar</button>
    </form>
  );
};

export default Register;
