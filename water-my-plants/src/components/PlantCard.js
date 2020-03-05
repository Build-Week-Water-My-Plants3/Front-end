import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import plant2 from '../img/plant2.png';

const PlantContainer = styled.div `
//   background: #608EFF;  
  font-family: 'Montserrat';
  height: 100vh;
  margin-top: 25px;
  
  `

const ButtonDiv = styled.div`
    display:flex;
    justify-content:space-around;
    margin-top: 15px;
`

const SpaceDiv = styled.div`
    margin-bottom: 15px;
`

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 450,
        margin: 0
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const PlantCard = props => {
    const classes = useStyles();
    let date = new Date(props.plants.water_schedule).toUTCString();
    // date = date.toUTCString();
    let lastDate = new Date(props.plants.last_watered).toUTCString();
    console.log(date);

    const newId = localStorage.getItem('id')    
    
    console.log('plantcard props: ', props)

    const deletePlant = () => {
        axiosWithAuth()
        .delete(`/plants/${props.plants.id}`)
        .then(res => {
            console.log('delete plants res: ', res)
            // props.history.push(`/users/${newId}/plants`)
            setTimeout(() => window.location.reload(), 500)
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (

        <PlantContainer className='plant-container' >
            <Card className={classes.root}>
                <CardContent key={props.plants.id} className="plant-card">
                    <Typography variant='h5' component='h2'>Plant Nickname: {props.plants.nickname}</Typography>
                    <img src={plant2}/>
                    <Typography className={classes.pos} color="textSecondary">Plant Species: {props.plants.species}</Typography>
                    <SpaceDiv>
                        <Typography variant='body2' component='p'>Last Watered: {lastDate}</Typography>
                    </SpaceDiv>  
                    <SpaceDiv> 
                        <Typography variant='body1' component='p'>Next Watering: {date}</Typography>
                    </SpaceDiv>
                    <Typography variant='body2' component='p'>{props.plants.frequency} times a week</Typography>
                    
                    <ButtonDiv>
                        <Link to={`/update-plant/${props.plants.id}`}>
                            <Button variant='contained' color="primary"
                            // onclick={props.history.push(`/update-plant/${props.plants.id}`)}
                            >
                                Edit
                            </Button>
                        </Link>
                        <Button variant='contained' color="secondary" type='submit' onClick={deletePlant}>
                            Delete
                        </Button>
                    </ButtonDiv>
                </CardContent>
            </Card>
        </PlantContainer>
    )
}

export default PlantCard;