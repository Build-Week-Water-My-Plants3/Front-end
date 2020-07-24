import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Route, useHistory} from 'react-router-dom';
import Register from './Register'
import {clearToken} from '../../utilities'


const SignUpBanner = styled.div
`
background-color: #0DCA71;
min-width: 12rem;
height: 3rem;
display: flex;
justify-content: center;
padding-top: 3rem;
margin-right: calc(-2rem);
color: white;
box-shadow: 6px 6px 0px #555555;
font-family: roboto;

        &&:hover {
          background-color: #0bb565;
          right: calc(3rem - 3px);
          margin-top: 5px;
          box-shadow: 3px 3px 0px #555555;
        
        }


        span {
          font-size: 1.2rem;
        }

        button {
            width: 100%;
            margin-top: -1rem;
            background-color: transparent;
            border: 0;
            color: white;
            font-size: 1.2rem;
            font-family: roboto;
            text-transform: uppercase;
        }

        a {
            width: 100%;
            min-height: 100%;
            margin: auto;
            margin-top: .5rem;

        }
`
export default function SignUp() {



    const {push} = useHistory();
    const handleLogout = () => { 
    clearToken();
    push ("/login")
    }



    return (


        <SignUpBanner>

            <Route path ="/(login|register)">
                <a href="/register"><button>
                    Signup
                </button>
                </a>

            </Route>

            <Route path ="/(dashboard)">

                <button onClick= {() => handleLogout()}>LOGOUT</button>
           
            </Route>

        </SignUpBanner>
    )



}