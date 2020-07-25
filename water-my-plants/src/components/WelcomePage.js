import React from "react";
import PrivateRoute from "./privateRoute/index";
import Plants from './Plants/plants';
import {Route, Redirect, Switch, useHistory } from "react-router-dom";
import Login from "./login/Login";
import CreateUser from './signup/CreateUser';
import Dashboard from "./Dashboard/Dashboard";
import PreferenceForm from "./PreferenceFroms";
import {getToken} from  "../utilities"

    function WelcomePage () {
    const {push} = useHistory();
    const token = getToken();    
   
    return (
        <div className = "wrapper">
            <Switch>
                <Redirect exact from = "/" to= "Login" />
                <Route path="/login" render= {props => <Login {...props} />} />
                <Route path ="/register" >
                    <CreateUser />
                    </Route>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                   <PrivateRoute
          exact
          path="/dashboard/plants"
          component={Plants}
        />
        <PrivateRoute exact path="/dashboard/preferences" component={PreferenceForm} />
       
                {/* <PrivateRoute path="/dashboard/preferences" component={PreferenceForm} /> */}
            </Switch>
      
        </div>
    );
}
    export default WelcomePage