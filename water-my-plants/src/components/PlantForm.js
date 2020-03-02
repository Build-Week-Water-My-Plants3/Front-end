import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const PlantForm = ({history}) => {
    const [add, setAdd] = useState({
        nickname: '',
        species: '',
        water_schedule: ''
    });

    const handleChange = e => {
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        });
        console.log(add);
    };

    const addPlant = () => {
        axiosWithAuth()
        .post(`/users/1/plants`, add)
        .then(res => {
            setAdd(res.data);
            history.pushState('/users/1/plants');
        })
        .catch(err => console.log(err))
    };

    const handleSubmit = e => {
        e.preventDefault();
        addPlant(add);
    };

    return (
        <div>
            <form className='plant-form' onSubmit={handleSubmit}>
                <h1>New Plant</h1>
                <label htmlFor='nickname'>Nickname: </label>
                <input type='text' id='nickname' name='nickname' value={add.nickname} onChange={handleChange}/>
                <label htmlFor='species'>Species: </label>
                <input type='text' name='species' id='species' value={add.species} onChange={handleChange}/>
                <label htmlFor='watering'>Watering Schedule: </label>
                <input type='text' name='water_schedule' id='watering' value={add.water_schedule} onChange={handleChange}/>
                <button>Add New Plant</button>
            </form>
        </div>
    )
}

export default PlantForm;