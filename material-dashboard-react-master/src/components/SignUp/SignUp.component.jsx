import axios from "axios";
import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";
import Cookies from 'universal-cookie';
import { withRouter } from "react-router";


const SignUp = ({history}) => {
  const [currentState, setCurrentState] = useState({
    usernName: "",
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const cookies = new Cookies();
  const coociesAccess = {
    path : '/',
    sameSite: 'strict',
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      usernName,
      firstName,
      LastName,
      email,
      password,
      confirmPassword,
    } = currentState;
    console.log(JSON.stringify(currentState));
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const user = await axios
        .post("http://localhost:8000/api/users", currentState)
        .then((res) => cookies.set('matanHomeWork', res.data.token , coociesAccess))
        
      setCurrentState({
        usernName: "",
        firstName: "",
        LastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      history.push('/admin/dashboard');
    } catch (e) {
      console.log("error in handle submit of sign up", e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentState((oldState) => {
      return { ...oldState, [name]: value };
    });
  };

  const {
    usernName,
    firstName,
    LastName,
    email,
    password,
    confirmPassword,
  } = currentState;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with email & password</span>
      <form className="sign-up-form" onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          type="text"
          name="usernName"
          value={usernName}
          onChange={(event) => handleChange(event)}
          label="User Name"
          required
        />
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => handleChange(event)}
          label="First Name"
          required
        />
        <FormInput
          type="text"
          name="LastName"
          value={LastName}
          onChange={(event) => handleChange(event)}
          label="Last Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(event) => handleChange(event)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(event) => handleChange(event)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => handleChange(event)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
