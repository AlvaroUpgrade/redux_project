import React from 'react'
import "./Login.scss"
import { useForm } from "react-hook-form";
import ReusableButton from '../components/ReusableButton';

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
      <ReusableButton size="l" color="white" text="ENVIAR">
      </ReusableButton>
    </form>
  );
};

export default Login;