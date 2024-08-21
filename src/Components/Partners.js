
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Partners.css';
import img1 from '../assets/download (3).png';
import img2 from '../assets/download (2).png';
import img3 from '../assets/download2.jpg.png';
import img4 from '../assets/download3.jpg.png';
import img5 from '../assets/download4.jpg.png';


const Partners = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="partners-section">
            <h4>OUR PARTNERS</h4>
            <Slider {...settings} className="partners-carousel">
                <div className="partner-logo">
                    <img src={img1} alt="Partner 1" />
                </div>
                <div className="partner-logo">
                    <img src={img2} alt="Partner 2" />
                </div>
                <div className="partner-logo">
                    <img src={img3} alt="Partner 3" />
                </div>
                <div className="partner-logo">
                    <img src={img4} alt="Partner 4" />
                </div>
                <div className="partner-logo">
                    <img src={img5} alt="Partner 5" />
                </div>
            </Slider>
        </div>
    );
};

export default Partners;

