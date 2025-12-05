import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Register = () => {
  const { RegisterWithEmailPassword, setUser,user,handleGoogleSignin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase =/[a-z]/;

    if(pass.length < 6) {
     toast.error("Password must be at least 6 characters");
      return;
    }
    if(!uppercase.test(pass)){
      toast.error("Password must contain an uppercase letter");
      return;
    }
    if(!lowercase.test(pass)){
      toast.error("Password must contain a lowercase letter");
      return;
    }

    RegisterWithEmailPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoUrl
        }).then(() => {
          setUser(userCredential.user)
          toast.success("Registration successful!");
          navigate("/")
        }).catch((error) => {
          toast.error("Failed to update profile");
        })
      })
      .catch(err => {
        toast.error("Registration failed");
      })
  }

  const googleSignup = ()=>{
  handleGoogleSignin()
  .then(result=>{
    const user = result.user
    setUser(user);
    toast.success("Signed up with Google!");
    navigate("/");
  })
  .catch(err=>{
     toast.error("Google sign-up failed");
  })
}

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Your full name" />
                <label className="label">PhotoUrl</label>
                <input name="photoUrl" type="text" className="input" placeholder="Enter Your photoUrl" />
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                <button onClick={googleSignup} className="btn"><FcGoogle /></button>

                <div>
                  <span>Already have an account? </span><Link to='/login' className='text-blue-500'>Login</Link>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register