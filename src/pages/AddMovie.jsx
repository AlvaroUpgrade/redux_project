// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { newMovie } from "../redux/movies/movies.functions"
import { useNavigate } from "react-router-dom";
import ReusableButton from "../components/ReusableButton";
import "./AddMovie.scss"
const AddMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const postMovie = async (datos) => {
    const formData = new FormData();
    formData.append("title", datos.title);
    formData.append("director", datos.director);
    formData.append("year", datos.year);
    formData.append("genre", datos.genre);
    formData.append("description", datos.description);
    formData.append("image", datos.image[0]);
    
    dispatch(newMovie(formData, navigate))
  }

  
  return (
    <form onSubmit={handleSubmit(postMovie)}>
      <label className="labelAddMovie">
        <p className="">Title</p>
        <input type="text" {...register("title", { required: true })} />
      </label>
      <label className="labelAddMovie">
       <p>Director</p> 
        <input type="text" {...register("director", { required: false })} />
      </label>
      <label className="labelAddMovie">
       <p>Year</p> 
        <input type="text" {...register("year", { required: false })} />
      </label>
      <label className="labelAddMovie">
       
        <input className="inputImage" type="file" id="specialInput"  {...register("image", { required: true })} />
      </label>
      {/* <label>
        Genre
        <input type="text" {...register("genre")} />
      </label> */}
      <label className="labelAddMovie">
       <p>Description</p> 
        <input type="text" {...register("description", { required: false })} />
      </label>
      <ReusableButton size="l" color="yellow" text="Enviar" disable={!isValid}></ReusableButton>
    </form>
  );
};

export default AddMovie;
