import React,{useState} from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";

const SignUp = () => {
  const [currentState, setCurrentState] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
  });

  const handleSubmit = async(event) =>{
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = currentState;

    if(password !== confirmPassword){
        alert('passwords don\'t match');
        return;
    }
    try{
        
        setCurrentState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',  
        })
    }catch(e){
        console.log('error in handle submit of sign up' ,e);
    }
  }

  const handleChange = (event) =>{
    const {name, value} = event.target
    setCurrentState((oldState) => {
        return {...oldState, [name]:value };
    });
  }

  const { displayName, email, password, confirmPassword } = currentState;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with email & password</span>
      <form className="sign-up-form" onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(event) => handleChange(event)}
          label="Display Name"
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
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
