import React from "react";
import {Link} from "react-router-dom";
import Logo from '../assets/logo.jpg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../navbar/NavbarStyles.css'

const Footer = () => {
  return (
    <footer>
          <div className="footer-container">
              
                    <div className="logo-footer">
                        <Link to="/">
                            <img src={Logo} alt="logo" className="logo logo-bottom" />
                        </Link>
                        <p>
                            At Pudio we believe that the world needs a simple platform where
                            expertise can be shared and consume.
                        </p>
                </div>
            
                <div>
                        <h3>Get in touch with us @</h3>
                        <p>7 Factory Road Aba, Nigeria. info@beacamp.com</p>
              </div>
                 <div>
                    <Link to="/">
                        <button className="btn btn-footer">Get Started</button>
                    </Link>
              </div>
          </div>

              <br />
              
        <div>
                    <div className="icons-footer">
                        <ul>
                                <li>
                                    <Link to="/"> <FaFacebook size={25} style={{ color: "#fff" }} />   </Link>
                                </li>
                                <li>
                                    <Link to="/" > <FaTwitter size={25} style={{ color: "#fff" }} /> </Link>
                                </li>
                                <li>
                                    <Link to="/"> <FaLinkedin size={25} style={{ color: "#fff" }} /></Link>
                                </li>
                                <li>
                                    <Link to="/"> <FaInstagram size={25} style={{ color: "#fff" }}/></Link>
                                </li>
                        </ul>
                    </div>
                     <div>
                           <p>Copyright © 2022 Beacamp Pudio | Powered by Beacamp Pudio</p>
                    </div>
        </div>
      
    </footer>
  );
};

export default Footer;
