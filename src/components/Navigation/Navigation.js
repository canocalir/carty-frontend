import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
        <nav style = 
        {{display: 'flex', justifyContent: 'flex-end'}}>
            <p 
            onClick={() => onRouteChange('signout')} 
            className = 'f4 link br2 o-80 grow white black no-underline underline-hover pa3 mr2 pointer'>Sign Out</p>
        </nav>
            );
        } else {
            return(
            <nav style = 
        {{display: 'flex', justifyContent: 'flex-end'}}>
            <p 
            onClick={() => onRouteChange('signin')} 
            className = 'f4 link br2 o-80 grow white black no-underline underline-hover pa3 mr2 pointer'>Sign In</p>
            <p 
            onClick={() => onRouteChange('register')} 
            className = 'f4 link br2 o-80 grow white black no-underline underline-hover pa3 mr2 pointer'>Register</p>
        </nav>
            );
        }
}

export default Navigation;