
import React, { useState, useEffect } from 'react';
import img1 from '../assets/HBanner1.jpg';
import img2 from '../assets/HBanner3.jpg.svg';
import img3 from '../assets/HBanner2.jpg.svg';
import img4 from '../assets/ArrowLeft.jpg.svg';
import img5 from '../assets/ArrowRight.jpg.svg';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 9000);

    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const handleAppStoreClick = () => {
    window.open("https://consumer.doctall.com/", "_blank");
};

  const handleButtonClick = () => {
    window.open("https://doctall.com/registration", "_blank")
  }
  return (
    <div className="sliding">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="carousel-slide" style={{ backgroundImage: `url(${img1})` }}>
          <h1 className="carousel-text">
            “Speak to doctors and specialists <br /> 
             from wherever you are. <br /> 
             Book an appointment now.”</h1>
          <button className="carousel-btn primary-btn" onClick={handleAppStoreClick}>Book a Doctor Now</button>
        </div>
        <div className="carousel-slide" style={{ backgroundImage: `url(${img2})`}}>
          <h1 className="carousel-text" style={{color: '#0c5273'}}>
            “Get <span style={{ color: 'orangered' }}>10% off</span> your first appointment <br/>
              when you sign up to Doctall.”</h1>
          <button className="carousel-btn secondary-btn" onClick={handleButtonClick}>Sign Up Here</button>
        </div>
        <div className="carousel-slide" style={{ backgroundImage: `url(${img3})` , color: '#0c5273' }}>
          <h1 className="carousel-text" style={{color: '#0c5273'}}>
            “Doctall has helped me to live <br/>
             healthy and get my medications <br /> 
             conveniently.”</h1>
          <button className="carousel-btn secondary-btn" onClick={handleAppStoreClick}>Book a Doctor Now</button>
        </div>
      </div>
      <div className="arrow-container">
        <img 
          src={img4} 
          style={{ height: '20px', width: '20px', cursor: 'pointer' }}
          alt="Previous Slide"
          onClick={previousSlide}
        />
        <img 
          src={img5} 
          style={{ height: '20px', width: '20px', cursor: 'pointer', marginLeft: '20px' }}
          alt="Next Slide"
          onClick={nextSlide} 
        />
      </div>
      <div className="dots-container">
        <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}></span>
        <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}></span>
        <span className={`dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}></span>
      </div>
    </div>
  );
};

export default Carousel;






