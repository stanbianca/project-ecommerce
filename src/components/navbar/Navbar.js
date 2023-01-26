import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Heart } from 'phosphor-react';
import "./Navbar.css";



 export const Navbar = () => {
  return (
       <div className="navbar">
           <Link to="/"> BiJewelry </Link>
           <div className="links">
           <Link to="/shop"> Shop </Link>
           <Link to="/cart">
               <ShoppingCart size={32} />
           </Link>
           <Link to="/wishlist">
               <Heart size={32} />
           </Link>
           </div>
       </div>

  );
};

