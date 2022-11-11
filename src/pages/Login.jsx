import React from 'react'
import "./Login.scss"
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const sendForm = (formularyData) => {
    const formData = new FormData();

    formData.append("email", formularyData.email);
    formData.append("password", formularyData.password);
    console.log(sendForm);
  };

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <label>
        Email
        <input type="text" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
      </label>
      <label>
        Password
        <input type="password" {...register("password", { required: true })} />
      </label>
      <button>Enviar</button>
    </form>
  );
};

export default Login;