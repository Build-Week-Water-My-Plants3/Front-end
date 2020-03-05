import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import anotherplant from '../img/logo-earth.svg';




 const Main = styled.div `
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

  const Login = (props) => {
  const [user, setUser] = useState({
      username: '',
      password: ''
  })
  const [userId, setUserId] = useState()

  const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

  // const handleUserName = e => {
  //     setUser({...user, username: e.target.value});
  // }

  // const handlePassword = e => {
  //     setUser({...user, password: e.target.value})
  // }

  const handleChanges = e => {
    setUser({
      ...user, [e.target.name]: e.target.value
    });
  }

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  const classes = useStyles();

//   const login = e => {
//       e.preventDefault();
//       axiosWithAuth()
//       .post('/auth/login', user)
//       .then(res => {
//           console.log(res)
//           localStorage.setItem('token', res.data.token);
//           props.history.push('/plants')
//       })
//       .catch(err => console.log(err))
//   };

  const login = e => {
    // e.preventDefault();
    
    axiosWithAuth()
      .post('/auth/login', user)
      .then(res => {
          console.log('login response: ', res)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('id', JSON.stringify(res.data.user_id))
        // setUserId(res.data.user_id)
         setTimeout(() => props.history.push(`/users/${res.data.user_id}/plants`), 2000);

         let welcomeMessage = res.data.message;
         console.log('welcome message', welcomeMessage)
        //  axiosWithAuth()
        // .get("/users")
        //   .then(res => {
        //    let user = res.data.filter(user=>welcomeMessage.includes(user.username))
        //    console.log('login props', props);
        //    props.history.push(`/users/${userId}/plants`)
        //  })
        //   .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  };

 
  
  return (
      <Main>
    
    <form 
    className = "forms"
    // onSubmit={login}
    onSubmit={handleSubmit(login)}
    >
      <Header1 className="header">
        <img className="newplant" src={anotherplant}/>
        <h1 className = "title">Login!</h1>
      </Header1>
      {errors.username && 'username is required'}
      <input className = "each" type="text" placeholder="username" name="username" onChange={handleChanges} 
      ref={register({required: true, maxLength: 15})}       
      />
      {errors.password && 'password is required'}
      <input className = "each" type="password" placeholder="password" name="password" onChange={handleChanges} 
      ref={register({required: true, maxLength: 100})} 
      />
      
     

     <input className = "buttons" type="submit" />
      {/* <Button size="large" variant="contained" color="primary" type="submit" onClick={login}> Log In </Button> */}
    </form>
    </Main>
  );
}

export default Login;


// From Arash Haji-Hassanzadeh to Everyone:  12:17 PM
// login = e => {
//     e.preventDefault();
    
//     axiosWithAuth()
//       .post(
//         "/auth/register”,
//         this.state.credentials
//       )
//       .then(res => {
//           console.log(res)
//         localStorage.setItem("token", res.data.token);
//          this.props.history.push("/plants");

//          let welcomeMessage = res.data.message;
//          axiosWithAuth().get("/users")
//           .then(res => {
//            let user = res.data.filter(user=>welcomeMessage.includes(user.username))
//            console.log('login props', this.props);
//            this.props.history.push(`/users/${user[0].id}/plants`)
//          })
//           .catch(err => console.log(err))
//       })
//       .catch(err => console.log(err));
//   };
