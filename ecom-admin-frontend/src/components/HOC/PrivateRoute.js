import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({component: Component, ...resprops}) {
    return <Route component={(props) => {
        const token = localStorage.getItem('token');
        if(token){
            return <Component {...props} />
        } else {
            return <Redirect to="/signin" />
        }
    }} {...resprops} />
}

export default PrivateRoute;