import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {

  const { setUser, handleGoogleSignin } = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

      if (!email || !pass) {
      toast.error("Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        toast.success("Login successful!");
        navigate(location.state? location.state: '/')
      })
      .catch((error) => {
        toast.error("Invalid email or password");
        console.log(error);
      });
  };

  const googleSignin = () => {
    handleGoogleSignin()
      .then(result => {
        const user = result.user
        setUser(user)
         toast.success("Logged in with Google!");
        navigate(location.state ? location.state : '/')
      })
      .catch(err => {
        toast.error("Google sign-in failed");
        console.log(err);

      })
  }

  const handleForget = (e) => {
    if (!email) {
      toast.error("Please enter your email first");
      return;
    }
    navigate(`/forget/${email}`)

  }



  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                <div><button type="button" onClick={handleForget} className="link link-hover">Forgot password?</button></div>
                <button onClick={googleSignin} className="btn"><FcGoogle /></button>

                <div>
                  <span>Don't have an account? </span><Link to='/signup'>Register</Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;