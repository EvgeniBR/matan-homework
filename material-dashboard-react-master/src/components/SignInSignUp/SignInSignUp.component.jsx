import SignIn from '../SignIn/SignIn.component';
import React from 'react'
import './SignInSignUp.styles.scss'
import SignUp from 'components/SignUp/SignUp.component';


const SignInSignUp = () =>{


    return(
        <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
    )
}

export default SignInSignUp;