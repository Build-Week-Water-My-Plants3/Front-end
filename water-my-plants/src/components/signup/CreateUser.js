import React, { useState, useEffect } from 'react';
import formSchema from "./schema";
import {useHistory} from "react-router-dom"
import styled from 'styled-components';
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import * as yup from "yup";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  input {
    height: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const StyledLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;

  button {
    width: 48%;
    height: 2rem;
    background-color: grey;
    border-radius: 0.25rem;
    border: 0px;
    color: white;
    font-size: 0.9rem;
    font-weight: 700;

    &:hover {
      background-color: #5d5d5d !important;
    }
  }
`;

const Welcome = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const initialState = {
  name: "",
  password: "",
  email: "",
};
const initialFormErrors = {
  name: "",
  password: "",
};

const togDisabled = true;
const  CreateUser  = (props)  => {
 
const { push } = useHistory();
const [formValues, setFormValues] = useState(initialState);
const [formErrors, setFormErrors] = useState(initialFormErrors);
 const [disabled, setDisabled] = useState(togDisabled);


const handleChange = (e) => {
  const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
}
 const handleSubmit = (event) => {
    event.preventDefault();
    const signupData = {
      email: formValues.email,
      password: formValues.password,
      username: formValues.name,
    };
    axiosWithAuth()
      .post("/api/auth/register", signupData)
      .then((res) => {
        console.log(res);
        push("/login");
      })
      .catch((err) => {
        console.log(err.json);
        setFormErrors({
          ...formErrors,
          name: "Signup failed. Please try again.",
        });
      });
  };
    useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      console.log(valid);
      setDisabled(!valid);
    });
  }, [formValues]);
  
    return (
      <div>
        <InputForm onSubmit={handleSubmit}>
          <Welcome>Register</Welcome>

          <StyledLabel htmlFor="username">Username:</StyledLabel>
            <input
            type="text"
            placeholder="Username"
            // minLength= "3"
            name="name"
            value={formValues.name}
            onChange={handleChange}
           
          />
          
        

          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <input
            type="email"
            placeholder="you@email.com"
            minLength="6"
            name="email"
            value={formValues.email}
            onChange={handleChange}
        
          />
          
          

          <StyledLabel htmlFor="password">Password:</StyledLabel>
              <input
            type="password"
            placeholder="password"
            minLength = "8"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          
          />
          
      

          

          <ButtonContainer>
            <button type="submit" disabled= {disabled} >Submit</button>

            <button type="reset">Cancel</button>
          </ButtonContainer>
        </InputForm>
      </div>
    );
  }




export default CreateUser;
