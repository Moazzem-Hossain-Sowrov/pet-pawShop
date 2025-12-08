import React from "react";

import i3 from '../assets/img3.jpg';
import { Link } from "react-router";

const Footer = () => {
   return (
      <footer className="bg-base-200 text-base-content py-10">
         <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* Left Section */}
            <aside>
               <div className="flex items-center gap-3">
                  <img
                            src={i3} // replace with your logo
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-cover"
                          />

                  <h2 className="text-2xl font-bold">PawMart</h2>
               </div>

               <p className="mt-3 max-w-xs text-sm">
                  PawMart connects local pet owners and buyers for adoption and pet care products.
               </p>

               <p className="mt-4 text-xs opacity-70">
                  © {new Date().getFullYear()} PawMart. All rights reserved.
               </p>
            </aside>

            {/* middle section */}
            <nav className="space-y-2 text-sm flex flex-col">
               <h6 className="footer-title text-base">Useful Links</h6>
               <a className="link link-hover">Home</a>
               <a className="link link-hover">Contact</a>
               <a className="link link-hover">Terms & Conditions</a>
               <a className="link link-hover">Services</a>
            </nav>

            {/* right section */}
            <nav className="space-y-2 text-sm flex flex-col">
               <h6 className="footer-title text-base">More</h6>
               <a className="link link-hover">Privacy Policy</a>
               <a className="link link-hover">About Us</a>
               <a className="link link-hover">Support</a>
            </nav>

         </div>
      </footer>
   );
};

export default Footer;
