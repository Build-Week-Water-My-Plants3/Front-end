import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../../utilities/axiosWithAuth";
import PlantCard from "./PlantCard";
import styled, { css } from "styled-components";
import { plants } from "../../actions"
import { getToken } from "../../utilities"
import axios from "axios";

const PlantsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;


  p {
    text-align: left;
    font-weight: bold;
    
  }
`;
const PlantListControl = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Roboto";
  max-width: 80%;
`;

const PlantCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  width: 100%;
`;

const PlantButton = styled.button
`
background-color: #0DCA71;
min-width: 12rem;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
margin: 2rem;

color: white;
box-shadow: 6px 6px 0px #555555;
font-family: roboto;

        &&:hover {
          background-color: #0bb565;
          right: calc(2rem - 3px);
          margin-top: 5px;
          margin-bottom: -5px;
          box-shadow: 3px 3px 0px #555555;
          margin-top: calc(2rem + 6px);
        
        }


        span {
          font-size: 1.2rem;
        }
`;



export default function PlantList(props) {
  const [plants, setPlants] = useState([]);
  const [type, setType] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

 
  const token = getToken();
useEffect ( () =>{
  axiosWithAuth().get('/api/cannabis/')
.then(data=> console.log("Preferrenced data",data.data))
}, []);
    

   


   
 
  const filterList = name => {
    const filteredList = plants.filter(plants =>
      plants.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredPlants(filteredList);
  }; 


    const getPlants = () => {

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://trefle.io/api/v1/plants?token=z5LP2lgnB9pvBCfOiW-gn9JRcIib9qx9MxKPKnYrgSQ";
      fetch(proxyurl + url) 
      .then(response => response.text())
      .then(contents => console.log(contents))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
      axios
  
        .get(
          
   
        )
   
        .then(response => {
          setPlants(response.data);
          setFilteredPlants(plants.slice(300,312));
        })
  
        .catch(error => {
          console.error("Server Error", error);
        }); 
     
    };
    useEffect(() => {
      getPlants();
    }, [type]);
    useEffect(() => {
      filterList(props.nameToSearch);
    }, [props.nameToSearch]);

  if (filteredPlants.length > 0) {
    return (
      <PlantsContainer>
        <PlantListControl>
          <PlantButton name="plantTypeOne" onClick={() => setType("Plant Type 1")}>
            Indica
          </PlantButton>
          <PlantButton name="plantTypeTwo" onClick={() => setType("Plant Type 2")}>
            Hybrid
          </PlantButton>
          <PlantButton name="plantTypeThree" onClick={() => setType("Plant Type 3")}>
            Sativa
          </PlantButton>
        </PlantListControl>
        <h3> Recommended {type} plants listed below:</h3>
        <PlantCardContainer>
          {filteredPlants.map(plant => {
            return (
              <PlantCard
                key={plant.id}
                plantName={plant.name}
                race={plant.race}
                id={plant.id}
              />
            );
          })}
        </PlantCardContainer>
      </PlantsContainer>
    );
  }
  
  return (
    <PlantsContainer>
      <PlantListControl>
        <PlantButton name="indica" onClick={() => setType("Plant Type 1")}>
          Indica
        </PlantButton>
        <PlantButton primary name="hybrid" onClick={() => setType("Plant Type 2")}>
          Hybrid
        </PlantButton>
        <PlantButton tertiary name="sativa" onClick={() => setType("Plant Type 3")}>
          Sativa
        </PlantButton>
      </PlantListControl>
      <h3> Recommended {type} plants listed below:</h3>
      <PlantCardContainer>
        {plants.slice(300,312).map(plant => {
          return (
            <PlantCard
              key={plant.id}
              plantName={plant.name}
              id={plant.id}
            />
          );
        })}
      </PlantCardContainer>
    </PlantsContainer>
  );
}
