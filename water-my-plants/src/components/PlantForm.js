import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import anotherplant from '../img/logo-earth.svg';

const ActualContainer = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 200vh;
  
`
const PlantContainer = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  
`
const Header1 = styled.div `
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  align-items: center;
  margin-bottom: 3rem;
`

const PlantForm = ({history}) => {
    const {id} = useParams();
    const [add, setAdd] = useState({
        nickname: '',
        species: '',
        last_watered: '',
        water_schedule: '',
        frequency: ''
    });

    const handleChange = e => {
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        });
        console.log(add);
    };

    const addPlant = (newPlant) => {
        axiosWithAuth()
        .post(`/users/${id}/plants`, newPlant)
        .then(res => {
            console.log('plant form add: ', res.data)
            history.push(`/users/${id}/plants`);
        })
        .catch(err => console.log(err))
    };

    const handleSubmit = e => {
        e.preventDefault();
        addPlant(add);
    };

    return (
        <ActualContainer>
        <PlantContainer>
            
            <form className='forms' onSubmit={handleSubmit}>
            <Header1 className="header">
                <img className="newplant" src={anotherplant}/>
                <h1 className = "title">New Plant</h1>
            </Header1>
                
                <input className="each1" type='text' id='nickname' placeholder="nickname" name='nickname' value={add.nickname} onChange={handleChange}/>
                
                <input className="each1" type='text' name='species' id='species' placeholder="species" value={add.species} onChange={handleChange}/>
                <label htmlFor='last_watered'>
                    YYYY-MM-DD HH:MM 
                </label>
                <input className="each1" type='text' name='last_watered' id='last_watered' placeholder="last watered" value={add.last_watered} onChange={handleChange}/>
                <label htmlFor='water_schedule'>
                    YYYY-MM-DD HH:MM
                </label>
                <input className="each1" type='text' name='water_schedule' id='watering' placeholder="next watering" value={add.water_schedule} onChange={handleChange}/>
                <label htmlFor='Frequecy'>
                    Watering Amounts Per Week
                </label>
                <input className="each1" type='text' name='frequency' id='frequency' placeholder="frequency" value={add.frequency} onChange={handleChange}/>

                <Button size="large" variant="contained" color="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            </form>
        </PlantContainer>
        </ActualContainer>
    )
}

export default PlantForm;