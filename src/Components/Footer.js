
import React, { useState } from "react";
import './Footer.css';
import img from '../assets/doctall_logowhite.jpg.svg';
import img1 from '../assets/facebook.jpg.svg';
import img2 from '../assets/instagram.jpg.svg';
import img3 from '../assets/twitter.jpg.svg';
import img4 from '../assets/linkedIn.jpg.svg';
import img5 from '../assets/AppStoreIcon.jpg.svg';
import img6 from '../assets/download (1).png';
import img7 from '../assets/download_img.jpg';

const Footer = () => {
    const [visibleColumns, setVisibleColumns] = useState({});

    const handleAppStoreClick = () => {
        window.open("https://apps.apple.com/ng/app/doctall/id1544455716", "_blank");
    };

    const handleGooglePlayClick = () => {
        window.open("https://play.google.com/store/apps/details?id=com.doctall&hl=en", "_blank");        
    };

    const toggleVisibility = (index) => {
        setVisibleColumns(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <img src={img} style={{ height: '100px', width: '120px' }} alt="Doctall Logo" />
                    <p className="about-text">
                        Doctall is a full-circle digital healthcare provider offering <br/>
                        comprehensive primary and secondary medical services <br/> 
                        accessible anywhere, to everyone.
                    </p>

                    <p className="contact-info">
                        +234 9010996000 <br />info@doctall.com
                    </p>

                    <div className="social-icons">
                        <img src={img1} alt="Facebook" />
                        <img src={img2} alt="Instagram" />
                        <img src={img3} alt="Twitter" />
                        <img src={img4} alt="LinkedIn" />
                    </div>
                    <p className="address">
                        Block F, Flat 2, LSDPC Luxury Towers, <br />
                        18-24 Adeola Odeku Street, Victoria <br />
                        Island Lagos.
                    </p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <div className="footer-column-header">
                            <h1>COMMUNITY</h1>
                            <img
                                alt="toggle visibility"
                                className="mob-footer-drop"
                                src={img7}
                                onClick={() => toggleVisibility(0)}
                            />
                        </div>
                        <div className={`footer-column-content ${visibleColumns[0] ? 'visible' : ''}`}>
                            <p>Doctall Foundation</p>
                            <p>Community Engagement</p>
                            <p>Events</p>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-header">
                            <h1>PRODUCTS</h1>
                            <img
                                alt="toggle visibility"
                                className="mob-footer-drop"
                                src={img7}
                                onClick={() => toggleVisibility(1)}
                            />
                        </div>
                        <div className={`footer-column-content ${visibleColumns[1] ? 'visible' : ''}`}>
                            <p>Diagnostics</p>
                            <p>Book a Doctor</p>
                            <p>Home Care</p>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-header">
                            <h1>CORPORATE</h1>
                            <img
                                alt="toggle visibility"
                                className="mob-footer-drop"
                                src={img7}
                                onClick={() => toggleVisibility(2)}
                            />
                        </div>
                        <div className={`footer-column-content ${visibleColumns[2] ? 'visible' : ''}`}>
                            <p>Doctall Pro</p>
                            <p>Partnerships</p>
                            <p>News</p>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-header">
                            <h1>COMPANY</h1>
                            <img
                                alt="toggle visibility"
                                className="mob-footer-drop"
                                src={img7}
                                onClick={() => toggleVisibility(3)}
                            />
                        </div>
                        <div className={`footer-column-content ${visibleColumns[3] ? 'visible' : ''}`}>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-header">
                            <h1>POLICIES</h1>
                            <img
                                alt="toggle visibility"
                                className="mob-footer-drop"
                                src={img7}
                                onClick={() => toggleVisibility(4)}
                            />
                        </div>
                        <div className={`footer-column-content ${visibleColumns[4] ? 'visible' : ''}`}>
                            <p>Refund/Cancellation Policy</p>
                            <p>Delivery Policy</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="store-icons">
                    <button className="promo-button" onClick={handleAppStoreClick}>
                    <img src={img5} alt="App Store" />
                    </button>
                    <button className="promo-button" onClick={handleGooglePlayClick}>
                    <img src={img6} alt="Google Play" />
                    </button>
                </div>
                <hr className="divider" />
                <p>© Doctall 2024. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;







