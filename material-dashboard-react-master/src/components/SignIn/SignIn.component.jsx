import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";


import "./SignIn.styles.scss";

const SignIn = () => {
  const [inputFields, setInputFields] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = inputFields
    try{
      console.log(inputFields)
      setInputFields({ email: "", password: "" });
    }catch(e){
      console.log(e);
    } 
  };

  const handleChange = async (event) => {
     const name  = event.target.name;
     const value = event.target.value;
    if(name === 'email'){
        setInputFields({
            email:value,
            password:inputFields.password
        })
    }else{
        setInputFields({
            email:inputFields.email,
            password:value
        })  
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an acount</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          type="email"
          name="email"
          value={inputFields.email}
          handleChange={(event)=>handleChange(event)}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={inputFields.password}
          handleChange={(event)=>handleChange(event)}
          label="password"
          required
        />
        <div className="buttons">
        <CustomButton type="submit" value="submit form">Sign In</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
