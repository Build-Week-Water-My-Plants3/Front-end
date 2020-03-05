import React, { useContext } from 'react';
import { PlantContext } from '../utils/context';
import PlantCard from './PlantCard';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // padding-top: 25px;
    // margin: 50px auto;
    justify-content: space-around;
    align-content:center;
    align-items:center;
    
`

const ListPlants = (props) => {
    const plants = useContext(PlantContext);
    console.log("plants from plantContext: ", [plants] );

    // const emptyArray = plants.length;
    
    
    return(
        <Div className = 'plant-page'>
            {
            plants &&
            plants.map(flower =>{
                return(

                    <PlantCard history={props.history} key={flower.id} id={props.id} setPlants={props.setPlants} plants={flower} />)}
                )
            } 
        </Div>
    )
}

export default ListPlants;