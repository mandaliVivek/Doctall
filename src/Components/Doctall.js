
import React from "react";
import './Doctall.css';
import img from '../assets/DCTL3 copy.jpg';
import img1 from '../assets/doctall1.jpg';
import img2 from '../assets/doctall2.jpg';
import img3 from '../assets/arrowUpRight.jpg.svg';

const Doctall = () => {

    const handleViewAllPostsClick = () => {
        window.open("https://living.doctall.com/doctallpedia/", "_blank");
    };

    const handleGooglePlayClick = () => {
        window.open("https://living.doctall.com/2023/09/22/why-guests-had-to-squeeze-between-two-naked-models-to-enter-a-trending-art-show/", "_blank");
    };

    return (
        <>
            <div className="doctall-section">
                <div className="doctall-header">
                    <h1 style={{marginRight: '10%'}}>Doctallpedia</h1>
                    <button style={{ border: '2px solid orangered' }} onClick={handleViewAllPostsClick}>View all posts</button>
                </div>
                <p >Read the most up-to-date information about 1000+ health conditions. These are what others are reading:</p>
            </div>

            <hr className="divider" />
            <br />
            <br />

            <div className="doctall-section">
                <div className="doctall-header">
                    <h1 style={{marginRight: '10%'}}>Doctall Living</h1>
                    <button style={{ border: '2px solid orangered' }} onClick={handleViewAllPostsClick}>View all posts</button>
                </div>
                <p>Our team of health experts and doctors provide the latest articles on being and staying healthy</p>   

            <div className="doctall-cards">
                <div className="doctall-card">
                    <img src={img} alt="Doctall Living" />
                    <h4>Doctall Living</h4>
                    <h2 style={{fontSize: 'x-large' , color: 'black' , fontWeight: 'bold'}}>Why Guests Had to <br />
                        Squeeze Between Two <br />
                        Naked Models to Enter a <br />
                        Trending Art Show</h2>
                    <img src={img3} style={{ height: '20px', width: '20px', marginLeft: '90%', marginTop: '-70%' }}></img>
                    <p style={{ textAlign: 'initial', marginTop: '-10%' }}>Imagine going to an art show and being greeted <br />
                        by two naked models standing face to face in a</p>
                    <button style={{border: '2px solid #00839B'}} onClick={handleGooglePlayClick}>Read more</button>
                </div>

                <div className="doctall-card">
                    <img src={img2} alt="Men's Health" />
                    <h4>Doctall Living</h4>
                    <h2 style={{fontSize: 'x-large' , color: 'black' , fontWeight: 'bold'}}>Men's Health: How to <br />
                        Develop a New Healthy <br />
                        Habit</h2>
                    <img src={img3} style={{ height: '20px', width: '20px', marginLeft: '90%', marginTop: '-50%' }}></img>
                    <p style={{ textAlign: 'left', marginTop: '-10%' }}>Are you ready to upgrade your health game? <br />
                        Well, you have come to the right place! Today,</p>
                    <button style={{border: '2px solid #00839B'}} onClick={handleGooglePlayClick}>Read more</button>
                </div>

                <div className="doctall-card">
                    <img src={img1} alt="Caffeine Fiasco" />
                    <h4>Doctall Living</h4>
                    <h2 style={{fontSize: 'x-large' , color: 'black' , fontWeight: 'bold'}}>Caffeine Fiasco: How <br />
                        Much Caffeine is Too <br />
                        Much for a Man</h2>
                    <img src={img3} style={{ height: '20px', width: '20px', marginLeft: '90%', marginTop: '-50%' }}></img>
                    <p style={{ textAlign: 'left', marginTop: '-10%' }}>It's Monday morning, and you are clinging to <br />
                        your coffee mug like a lifeline. Caffeine, that</p>
                    <button style={{border: '2px solid #00839B'}} onClick={handleGooglePlayClick}>Read more</button>
                </div>
            </div>
        </div >
        </>
    );
};

export default Doctall;




