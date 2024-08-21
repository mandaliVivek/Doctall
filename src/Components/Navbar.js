
import React from 'react';
import { FaUserMd } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRibbon } from "react-icons/fa";
import './navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item nav-item-1">
        <FaUserMd size={"1.8em"} style={{marginLeft: '10%', color: 'antiquewhite', marginBottom:'5%'}}/>
        <div className="text-container">
          <h1 className="white-text">Doctall Care</h1>
          <p className="white-paragraph">
            Online Doctor Consultations and 
            Treatment Plans
          </p>
        </div>
      </div>
      <div className="nav-item nav-item-2">
        <FaMicroscope size={"1.8em"} style={{marginLeft: '10%', marginBottom:'5%'}} />
        <div className="text-container">
          <h1 className="black-text">Doctall Diagnostics</h1>
          <p className="black-paragraph">
            Compare prices & buy Lab Tests and 
            Disease Screenings at discounted prices
          </p>
        </div>
      </div>
      <div className="nav-item nav-item-3">
        <FaUsers size={"1.8em"} style={{marginLeft: '10%', marginBottom:'5%'}} />
        <div className="text-container">
          <h1 className="black-text">Doctall Living</h1>
          <p className="black-paragraph">
            Community Hub with Articles Fact
            Sheets Videos and Promotions
          </p>
        </div>
      </div>
      <div className="nav-item nav-item-4">
        <FaRibbon size={"1.8em"} style={{marginLeft: '10%', marginBottom:'5%'}} />
        <div className="text-container">
          <h1 className="black-text">Doctall Homecare</h1>
          <p className="black-paragraph">
            In-Home Care and tailored
            Premium Health Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;













