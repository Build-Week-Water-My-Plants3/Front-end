import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';



const LoginSpan = styled.span 
`
color: white;
`

export default function Login() {


    return (
        <Link to="/Login">

             <LoginSpan>Login</LoginSpan>

        </Link>
    )


}