
import React from "react";
import './One.css';
import img from '../assets/iphone.jpg';
import img1 from '../assets/appStore.jpg.svg';
import img2 from '../assets/download.png';

const One = () => {
    const handleAppStoreClick = () => {
        window.open("https://apps.apple.com/ng/app/doctall/id1544455716", "_blank");
    };

    const handleGooglePlayClick = () => {
        window.open("https://play.google.com/store/apps/details?id=com.doctall&hl=en", "_blank");        
    };

    return (
        <div className="one-container">
            <div className="text-section">
                <h1>Sign Up and get 10% off on your first purchase</h1>
                <div className="images">
                    <button className="promo-button" onClick={handleAppStoreClick}>
                        <img src={img1} alt="App Store" />
                    </button>
                    <button className="promo-button" onClick={handleGooglePlayClick}>
                        <img src={img2} alt="Google Play" />
                    </button>
                </div>
            </div>
            <div className="image-section">
                <img src={img} alt="Promotional" className="promo-image" />
            </div>
        </div>
    );
};

export default One;












