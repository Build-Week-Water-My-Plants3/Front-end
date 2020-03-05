import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
// import PlantPage from './Component/PlantPage';
import Plants from './components/Plants';
import PlantForm from './components/PlantForm';
import PlantCard from './components/PlantCard';
import UpdatePlantForm from './components/UpdatePlantForm';

import Navigation from './components/Navigation';
import Signup from "./components/SignUp";
import Login from "./components/Login";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="NavBar">
        <Navigation />
      </header>
    {/* Switch and routes here as well as Protected Routes with Token Authentication */}

      <Switch>
        <ProtectedRoute path='/protected'  component={Plants}/>
        <ProtectedRoute path='/users/:id/plants' component={Plants} />
        <ProtectedRoute exact path='/users/:id/plantform' component={PlantForm}/>
        <ProtectedRoute exact path='plantcard' component={PlantCard} />
        <Route path='/update-plant/:id' component={UpdatePlantForm} />
        <Route path="/register" component={Signup}/>
        <Route path="/" component={Login}/>
      </Switch>

    </div>
  );
}

export default App;
