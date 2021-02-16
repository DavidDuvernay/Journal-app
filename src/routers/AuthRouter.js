import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";import { LoginScreen } from '../components/auth/Login Screen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <Switch>
            <Route 
                exact
                path= '/auth/login'
                component = {LoginScreen}
            >                
            </Route>

            <Route
                exact
                path= '/auth/register'
                component= {RegisterScreen}
            >
            </Route>

            <Redirect to= '/auth/login'></Redirect>
        </Switch>
    )
};