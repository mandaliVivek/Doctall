
import React from "react";
import './Consult.css';
import img1 from '../assets/bawd.jpg';
import img2 from '../assets/seespecialistdark.jpg.svg';

const Consult = () => {
    
    const handleAppStoreClick = () => {
        window.open("https://consumer.doctall.com/", "_blank");
    };

    return (
        <>
            <div className="container">
                <div className="item">
                    <button className="promo-button" onClick={handleAppStoreClick}>
                    <img src={img1} alt="Icon 1" className="icon" />
                    </button>
                    <h4 className="title">Book an appointment</h4>
                    
                </div>
                <div className="separator"></div>
                <div className="item">
                <button className="promo-button" onClick={handleAppStoreClick}>
                    <img src={img2} alt="Icon 2" className="icon" />
                    </button>
                    <h4 className="title">See a specialist</h4>  
                </div>
            </div>
        </>
    );
};

export default Consult;



