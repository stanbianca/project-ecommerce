import React from "react"
import { FacebookLogo, GoogleLogo, PinterestLogo, TwitterLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import "./Footer.css"



export const Footer = () => {

    return (
      <div className="contact">
        <div className="wrapper">
          <span>Introduceti-va e-mailul si veti primi o reducere: </span>
          <div className="mail">
            <input type="text" placeholder="Enter your e-mail..." />
            <button onClick={ () => {
            window.alert("Ai primit o reducere de 20% la toate produsele!");
             }
                
            }>
               Enter
              </button>
          </div>
          <div className="icons_logo">
            <FacebookLogo />
            <InstagramLogo />
            <TwitterLogo />
            <GoogleLogo />
            <PinterestLogo />
          </div>
        </div>
      </div>
    );
  };