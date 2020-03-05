import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { PlantContext } from '../utils/context';
import ListPlants from './ListPlants';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import anotherplant from '../img/logo-earth.svg';

const RealContainer = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 260vh;
  `
const PlantContainer = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  `
  const Header1 = styled.div `
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  align-items: center;
  margin-bottom: 3rem;
`

const Plants = props => {
    const {id} = useParams();
    const [plants, setPlants] = useState();
    const [users, setUsers] = useState();
    
    useEffect(() => {
        axiosWithAuth()
        .get(`/users/${id}/plants`)
          .then(res => {
              console.log(' this is plants.js response: ', res)
                setPlants(res.data);
     })
          .catch(err => console.log(err))
    }, [])

       

    useEffect(() => {
        axiosWithAuth()
        .get(`/users/${id}`)
        .then(res => {
            setUsers(res.data);
            console.log('users res: ', res.data);
        })
        .catch(err => console.log(err));
    }, []);

    

    return (
        <>
        <RealContainer>
            <PlantContainer>
            <Header1 className="header">
                <img className="newplant" src={anotherplant}/>
                <h1 className = "title">Your Plants!</h1>
                
            </Header1>
            <h3>Click <a href = {`/users/${id}/plantform`}>here</a> to add a new plant!</h3>
                <PlantContext.Provider value={plants}>
                    <ListPlants setPlants={setPlants} id={id} history={props.history}/>
                </PlantContext.Provider>
                
            </PlantContainer>
            </RealContainer>
        </>
    );
};

export default Plants;