import React from 'react'
import background from "../img/signup.svg";
// import SignupForm from './signupForm';
import Container from './container';
const Body = ()=> {
    return (
        <>
        <div className="App"></div>
        <div className="signupbox">
        <Container/>
        </div>
        <div style={{backgroundImage:`url(${background})`,
        backgroundRepeat: 'no-repeat'}} className="signupbox2">

        </div>

        </>
    )
  }

export default Body;