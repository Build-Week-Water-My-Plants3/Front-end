import React, {useState, useEffect, useCallback} from 'react';
import { axiosWithAuth, setToken } from "../../utilities";
import { Link,  useHistory } from "react-router-dom";
import * as yup from "yup";
import { connect } from "react-redux";
import styled from 'styled-components';
import formSchema from "./schema";
import { user } from "../../actions"


 const InputForm = styled.form
  `
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  

    input {
        height: 1.5rem;
        margin-bottom: 1rem;
    }
  
  `

 const  StyledLabel = styled.label
  `
  font-weight: 600;
  margin-bottom: .5rem;
  text-align: center;
  
  `

  const  ButtonContainer = styled.div
  `
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;

    button {
        width: 48%;
        height: 2rem;
        background-color: grey;
        border-radius: .25rem;
        border: 0px;
        color: white;
        font-size: .9rem;
        font-weight: 700;

            &:hover {
                background-color: #5d5d5d !important;
            }

    }  
  `

   const Welcome = styled.h2
  `
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  `
  const initialValues = {
    username: "",
    password: "",
  };

  const initialErrors = {
    username: "",
    password: "",
  };
  
const initialDisabled = true;
const Login = (props) => {

const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);



 const  handleChange = (e) => {
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
    //  .catch((error) => {
    //    setFormErrors({
    //      ...formErrors,
    //      [name]: error.error[0],
    //    });
    //  })
     setFormValues({
       ...formValues,
       [name]: value
     });
    };

   const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: formValues.email,
      password: formValues.password,
    };
    axiosWithAuth()
      .post("/api/auth/login", loginData)
      .then((res) => {
        setToken(res.data.token);
        props.setUser(res.data.username);
        push("/dashboard")
      })
   .catch((err) => {
     setFormErrors({
       ...formErrors,
       name: "Login failed"
     });
   });
  };

useEffect(() =>{
  formSchema.isValid(formValues).then((valid) => {
    console.log(valid);
    setDisabled(!valid);
  }); 
}, [formValues]);


  return (

    <div>
   

      <InputForm onSubmit={handleSubmit}>

          <Welcome>Welcome</Welcome>


        <StyledLabel htmlFor="email">E-Mail</StyledLabel> 
        <input 
        type="text" 
        placeholder="E-mail"
        name="email"
        value={formValues.email}
        onChange={handleChange}
       
        />
       

        <StyledLabel htmlFor="password">Password</StyledLabel>
        <input 
        type="password" 
        placeholder="password"
        name="password" 
        value={formValues.password}
        onChange = {handleChange}
        />
       

   
        
     
        <ButtonContainer>
     
            <button type="submit"  disabled={disabled}>Submit</button>

            <button type="reset">Cancel</button>

        </ButtonContainer>
 



      </InputForm>
     
      


    </div>
  );
}

export default connect(null, {
  setUser: user.setUser,
})(Login)

// export default Login;
