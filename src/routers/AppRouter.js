import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import firebase from 'firebase';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) => {
            if(user?.uid){
                dispatch(login( user.uid, user.displayName ))
                setIsLoggedIn(true)
                dispatch(startLoadingNotes(user.uid))
                
            } else{
                setIsLoggedIn(false)
            }

            setChecking(false)
        })
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if(checking){
        return(
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path= '/auth'
                        component= {AuthRouter}
                        isAuthenticated= {isLoggedIn}
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated= {isLoggedIn}
                        path= '/'
                        component= {JournalScreen}    
                    />

                    <Redirect to= '/auth/login'></Redirect>

                </Switch>
            </div>
        </Router>

    )
};