import React from 'react';
import styled, {css} from "styled-components";



function Planttyles() {

const PlantsContainer = styled.div`


display: flex;
flex-direction: column;
font-size: 1rem;
min-height: 100%;
min-width: 99%;
font-family: 'Roboto', sans-serif;

  p {
      text-align: left;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
  }

  h3 {
      text-align: center;
  }


`;

const PlantController = styled.div`
display: flex;
justify-content: space-evenly;
font-family: 'Roboto', sans-serif;
`;

const PlantCardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
font-family: 'Roboto', sans-serif;
`;

const PlantButton = styled.button`
background-color: #0DCA71;
min-width: 12rem;
height: 6rem;
display: flex;
justify-content: center;
padding-top: 2rem;

color: white;
box-shadow: 6px 6px 0px #555555;
font-family: roboto;
font-size: 1.5rem;

      &&:hover {
        background-color: #0bb565;
        right: calc(2rem - 3px);
        margin-top: 5px;
        box-shadow: 3px 3px 0px #555555;
        margin-bottom: -6px;
       
      
      }


      span {
        font-size: 1.2rem;
      }
`;

return (

    PlantStyles();
)

    }