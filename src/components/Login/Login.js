import React from "react";
import useFirebase from "./../../hooks/useFirebase";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(() =>{
      navigate(from, {replace: true})
    })
  }


  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
