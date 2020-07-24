import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from "../../utilities"

const PrivateRoute = ({ component: Component, ...props }) => {
    const token = getToken();

    return (
        <Route 
        {...props}
        render = {() => {
            return token ? <Component /> :  <Redirect to = "/login" />
        }}
        />
    );
};

export default PrivateRoute;