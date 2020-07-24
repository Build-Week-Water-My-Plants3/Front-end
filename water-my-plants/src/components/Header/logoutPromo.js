import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {getToken, clearToken} from  "../../utilities/";
import { useHistory } from "react-router-dom";



const HandleLogOut = () => { 

  const push = useHistory();
  
  clearToken();
  push ("/login")
  }

const LogoutDiv = styled.div
`
display: flex;
flex-direction: row;
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


const LogoutContain = styled.div
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

const LogoutPrompt = styled.div
`
display: flex;
height: 2rem;
align-items: center;
min-width: 6rem;


          &&:hover {
            box-sizing: border-box;
            border-top: 4px solid transparent;
            border-bottom: 4px solid #FDCB02;
          }


`

const SignOutBanner = styled.div
`
background-color: #0DCA71;
min-width: 12rem;
height: 3rem;
display: flex;
justify-content: center;
padding-top: 2rem;
margin-right: calc(-6rem + 6px);
color: white;
box-shadow: 6px 6px 0px #555555;
font-family: roboto;

        &&:hover {
          background-color: #0bb565;
          right: calc(2rem - 3px);
          margin-top: 5px;
          box-shadow: 3px 3px 0px #555555;
        
        }


        span {
          font-size: 1.2rem;
        }


`

function LogoutPromo() {

  return (

   <LogoutDiv>

        <LogoutContain>

          
              <SignOutBanner>
                  <Link to="/login">
                      <button onClick= {() => HandleLogOut()}>logout</button>
                    </Link>
              </SignOutBanner>



        </LogoutContain>


   </LogoutDiv>


  );
}

export default LogoutPromo
