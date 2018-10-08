import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
 


 const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {

        const isLogin = localStorage.getItem('isLoggedIn');
        return (
          isLogin
            ? rest.path === '/' ? <Redirect to={{ pathname: '/userInfo', state: { from: props.location } }}/>: <Component {...props} /> 
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    
    }
} />
)

export default PrivateRoute;