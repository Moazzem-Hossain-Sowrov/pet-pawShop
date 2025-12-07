import React from "react";
import { Link, useInRouterContext } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

import i3 from '../assets/img3.jpg';

const Navbar = () => {

  const { user } = useContext(AuthContext)

  const handleSignout = () => {
    signOut(auth)
  }
  


 return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-12">

      
      <div className="navbar-start flex items-center gap-2">
        <img
          src={i3} 
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <Link to="/" className="text-xl font-bold">
          PawMart
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/add-services">Add Services</Link></li>
          <li><Link to="/my-services">My Services</Link></li>
        </ul>
      </div>

     
      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <>
            <Link to="/profile">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </Link>
            <button onClick={handleSignout} className="btn btn-sm">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>
        )}
      </div>

    
      <div className="dropdown lg:hidden ml-auto">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/add-services">Add Services</Link></li>
          <li><Link to="/my-services">My Services</Link></li>
          {user ? (
            <li><button onClick={handleSignout}>Logout</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </div>
  );

};

export default Navbar;