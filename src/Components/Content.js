
import React from "react";
import './Content.css';
import img1 from '../assets/banner12.jpg';
import img2 from '../assets/specialistCard2.jpg.svg';
import img3 from '../assets/diagnosisCard1.jpg.svg';

const Content = () => {

    const handleAppStoreClick = () => {
        window.open("https://consumer.doctall.com/", "_blank");
    };

    const treatmentButtonClick = () => {
        window.open("https://doctall.com/hair-loss#Treatment_plan", "_blank");
    };

    const getTestedButtonClick = () => {
        window.open("https://diagnostics.doctall.com/", "_blank");
    }

    return (
        <div className="content-container">
            <h6 className="section-title">HEALTHY LIVING</h6>
            <h2 className="main-title">How we can help you manage your health</h2>
            <div className="cards-container">
                <div className="card">
                    <h2 className="card-title">Worried about something? <br/> Need a diagnosis?</h2>
                    <h5 className="card-text" style={{color: 'whitesmoke'}}>Speak to one of our doctors <br/>
                     now</h5>
                     <img src={img1} className="card-image" alt="Doctor" />
                    <button className="card-button" style={{backgroundColor: 'whitesmoke' , color: '#143656', border: '2px solid whitesmoke' , fontSize: 'small'}} onClick={handleAppStoreClick}>SEE A DOCTOR</button>
                </div>
                <div className="card">
                    <h2 className="card-title">Seen a doctor and know <br/> what treatment you need?</h2>
                    <h5 className="card-text" style={{color: 'whitesmoke'}}>Get your medications <br/>
                         and enjoy 20% off</h5>
                         <img src={img2} className="card-image" alt="Medications" />
                    <button className="card-button" style={{backgroundColor: 'whitesmoke' , color: '#143656', border: '2px solid whitesmoke' , fontSize: 'small'}} onClick={treatmentButtonClick}>BUYTREATMENTS</button>
                </div>
                <div className="card">
                    <h2 className="card-title">Doctor told you need a <br/>
                    test?</h2>
                    <h5 className="card-text" style={{color: 'whitesmoke'}}>Book your follow-up tests <br/>
                     or screenings</h5>
                     <img src={img3} className="card-image" alt="Tests" />
                    <button className="card-button" style={{backgroundColor: 'whitesmoke' , color: '#143656', border: '2px solid whitesmoke' , fontSize: 'small'}} onClick={getTestedButtonClick}>GET TESTED</button>
                </div>
            </div>
        </div>
    );
};

export default Content;






