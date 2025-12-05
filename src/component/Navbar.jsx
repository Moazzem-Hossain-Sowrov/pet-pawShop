import React from "react";
import { Link, useInRouterContext } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {

   const {user} = useContext(AuthContext)

   const handleSignout = ()=>{
      signOut(auth)
   }


   return (
      <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-12">

  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </div>

    <a className="btn btn-ghost text-xl">Winter Pat Care</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Services">Services</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </ul>
  </div>

  {user && (
    <div className="navbar-end">
      <button onClick={handleSignout} className="btn">
        Logout
      </button>
    </div>
  )}

  {!user && (
    <div className="navbar-end">
      <Link to="/login" className="btn">
        Login
      </Link>
    </div>
  )}
</div>

   );
};

export default Navbar;