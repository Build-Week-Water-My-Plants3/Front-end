import React from "react";
import styled from "styled-components";
import leaf from "../../img/leaf.svg";
const PlantCardTemp = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
  max-width: 20%;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: #0b9444;

    p {
      color: #ffffff;
    }

`;



const TypeMar = styled.div`

  background-color: #0bb565;
  color: #ffffff;
  width: calc(100% - 1rem) ;
  font-weight: bold;
  font-size: 0.9rem;
  padding: .5rem;
  font-family: 'Roboto', sans-serif;
 `;


const PlantCard = props => {
  return (
    <PlantCardTemp>
      <TypeMar>
        Type: {props.race} 
      </TypeMar>
      
      <img src={leaf} alt="leafPhoto" width="100%" height="100%" />
      <p> {props.plantName} </p>

      
    </PlantCardTemp>
  );
};
export default PlantCard;
