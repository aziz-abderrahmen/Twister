import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
   return (
      <footer className="footer">
         <div className="container text-center">
            <img
               src="../../logo.ico"
               className="d-block mb-4 mx-auto"
               width="100px "
            />

            <p className="text-secondary col md 9 mx-auto">
               A web application to publish your thoughts, connect with friends,
               share pictures, comment, like and much more!
            </p>
            <p className="text-secondary col md 9 mx-auto">
               Developed by Mohamed Aziz Abderrahmen.
            </p>
            
            <p className="text-secondary">
               Copyright 2020. All rights reserved!
            </p>
         </div>
      </footer>
   );
}

export default Footer;
