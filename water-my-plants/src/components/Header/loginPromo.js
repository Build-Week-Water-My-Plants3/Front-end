import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Register from './Register'
import SignUp from './SignUp'
import {matchPath} from "react-router";





const LoginDiv = styled.div
`
display: flex;
flex-direction: row;
justify-content: flex-end;
min-width: 16rem;
font-family: 'Roboto', sans-serif;
max-width: 20%;

        img {
          width: 1rem;
          margin-right: 1rem;
        }

        span {
          text-transform: uppercase;
          font-weight: 900;
          font-size: .9rem;
        }

`


const LoginContain = styled.div
`
position: absolute;
height: 3rem;
display: flex;
justify-content: space-between;
right: 2rem;
top: -.5rem;

        &&:hover {
          right: calc(2rem - 3px);
        }

`

const LoginPrompt = styled.div
`
display: flex;
height: 2rem;
align-items: center;
justify-content: flex-end;
min-width: 6rem;


          &&:hover {
            box-sizing: border-box;
            border-top: 4px solid transparent;
            border-bottom: 4px solid #FDCB02;
          }


`



function LoginPromo() {

  const LoginSpan = styled.span 
  `
    color: white;
    font-weight: 400;
    font-size: .9rem;
    

    `

  return (

    


    
   <LoginDiv>

     <LoginPrompt>

        <Route path ="/(login|register)" component={Register} />

        <SignUp />

  

     </LoginPrompt>


        <LoginContain>

            <Link to="/register">

             

            </Link>

        </LoginContain>


   </LoginDiv>










  );
}

export default LoginPromo;
