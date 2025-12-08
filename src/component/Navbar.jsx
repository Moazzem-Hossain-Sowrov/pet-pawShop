import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
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
        <img src={i3} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        <Link to="/" className="text-xl font-bold">
          PawMart
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          {
            user && (
              <>
                <li><Link to="/profile">My Profile</Link></li>
                <li><Link to="/add-services">Add Services</Link></li>
                <li><Link to="/my-services">My Services</Link></li>
                <li><Link to="/my-orders">My Orders</Link></li>
              </>
            )
          }
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">

       
        <button onClick={toggleTheme} className="btn btn-sm btn-outline">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

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

    </div>
  );
};

export default Navbar;
