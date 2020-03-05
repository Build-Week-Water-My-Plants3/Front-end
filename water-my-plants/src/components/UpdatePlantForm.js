import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import anotherplant from '../img/logo-earth.svg';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Main2 = styled.div `
  background: #608EFF;  
  font-family: 'Montserrat';
  height: 130vh;
`
const Main1 = styled.div `
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

const UpdatePlantForm = ({ history,
    match: {
        params: { id }
    } 
}) => {
    const [plantData, newPlantData] = useState({
            nickname: '',
            species: '',
            last_watered: '',
            water_schedule: '',
            frequency: ''
     });
     
    //  const [plantList, setPlantList] = useState([]);

     const newId = localStorage.getItem('id');

    //  const getPlantList=() => {
    //     axiosWithAuth()
    //     .get(`/plants/${id}`)
    //     .then(res => {
    //         setPlantList(res.data);
    //     })
    //     .catch(err => console.log(err))
    //  }

    const handleChange = e => {
        newPlantData({
            ...plantData,
            [e.target.name]: e.target.value
        });
        console.log(plantData);
    };

    const handleSubmit = e => {
        console.log(id);
        e.preventDefault();
        
        axiosWithAuth()
        .put(`/plants/${id}`, plantData)
        .then(res => {
            console.log(res);
            history.push(`/users/${newId}/plants`);
        })
        .catch(err => console.log(err));
    };


    return (
        <Main2>
        <Main1 className='update'>
            <form className="forms" onSubmit={handleSubmit}>
            <Header1 className="header">
                <img className="newplant" src={anotherplant}/>
                <h1 className="title">Edit your Plant!</h1>
            </Header1>
                <label htmlFor='nickname'>
                    NickName: 
                </label>
                <input
                id='nickname'
                name="nickname"
                className="each1"
                value={plantData.nickname}
                onChange={handleChange}
                />
                <label htmlFor='species'>
                    Species: 
                </label>
                <input
                id='species'
                name='species'
                className="each1"
                value={plantData.species}
                onChange={handleChange}
                />
                <label htmlFor='last_watered'>
                    Last Watered: YYYY-MM-DD HH:MM 
                </label>
                <input
                id='last_watered'
                name='last_watered'
                className="each1"
                value={plantData.last_watered}
                onChange={handleChange}
                />

                <label htmlFor='species'>
                    Next Watering: YYYY-MM-DD HH:MM
                </label>
                <input
                id='water_schedule'
                name='water_schedule'
                className="each1"
                value={plantData.water_schedule}
                onChange={handleChange}
                />
                <label htmlFor='frequency'>
                    Watering Frequency
                </label>
                <input
                id='frequency'
                name='frequency'
                className="each1"
                value={plantData.frequency}
                onChange={handleChange}
                />
                <Button size="large" variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </Main1>
        </Main2>
    )
}

export default UpdatePlantForm;