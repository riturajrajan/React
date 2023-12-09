import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleLoginButton = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="body"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()}className="absolute top-36 p-12 bg-black w-3/12 left-0 right-0 mx-auto text-white mb-3 opacity-90">
        <h3 className="font-bold text-3xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h3>
        { !isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 w-full my-3 bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="p-2 w-full my-3 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 w-full my-3 bg-gray-700"
        />
        <button className="w-full rounder bg-red-800 my-3 p-2" onClick={handleLoginButton}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-red-600 py-2 font-bold">{errorMessage}</p>
        <p className="my-3 font-bold cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up" : "Already a user ? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
