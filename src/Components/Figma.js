
import React from "react";
import './Figma.css';
import img from '../assets/whitearrow.jpg.png';
import searchIcon from '../assets/searchicon.jpg.png';
import heartIcon from '../assets/heart-icon.jpg';
import cartIcon from '../assets/cart-icon.jpg';
import loginIcon from '../assets/login-icon.jpg';
import img1 from '../assets/img1.jpg.svg.jpeg';
import img2 from '../assets/thefreeforty_shop.jpg';
import img3 from '../assets/shutterstock.jpg';
import img4 from '../assets/shutterstocks.jpg';
import img5 from '../assets/icon-paper-bag.jpg';
import img6 from '../assets/tom-cruise.jpg';
import img7 from '../assets/emma-watson.jpg';
import img8 from '../assets/will-smith.jpg';
import img9 from '../assets/trinstlin.jpg';
import img10 from '../assets/deliveryicon.jpg';
import img11 from '../assets/customersrvc.jpg';
import img12 from '../assets/money-back-guarantee.jpg';
import img13 from '../assets/qrcode.jpg';
import img14 from '../assets/download copy 2.png';
import img15 from '../assets/appStore.jpg.svg';

const Figma = () => {
    return (
        <>
            <div className="header-component">
                <div className="top">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>Shop Now</span></p>
                    <div className="language-select">
                        <span>English</span>
                        <img src={img} alt="Arrow Icon" />
                    </div>
                </div>

                <div className="first">
                    <h2 className="logo">Exclusive</h2>
                    <nav className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                        <a href="#">About</a>
                        <a href="#">Sign Up</a>
                    </nav>
                    <div className="search-container">
                        <input type="text" id="text" name="text" placeholder="What are you looking for?" />
                        <img src={searchIcon} alt="Search Icon" className="search-icon" />
                    </div>
                    <div className="icons-container">
                        <img src={heartIcon} alt="Heart Icon" className="heart-icon" />
                        <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
                        <img src={loginIcon} alt="Login Icon" className="login-icon" />
                    </div>
                </div>
            </div>


            <div className="container about-section">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Our Story</h1>
                        <p>
                            Launched in 2015, Exclusive is South Asia's premier online shopping <br />
                            marketplace with an active presence in Bangladesh. Supported <br />
                            by a wide range of tailored marketing, data, and service solutions, <br />
                            Exclusive has 10,500 sellers and 300 brands and serves 3 <br />
                            million customers across the region.
                        </p>
                        <br />
                        <p>
                            Exclusive has more than 1 million products to offer, growing at a <br />
                            very fast rate. Exclusive offers a diverse assortment in categories <br />
                            ranging from consumer.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={img1} alt="Shopping" className="img-fluid" />
                    </div>
                </div>
            </div>



            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-3">
                        <div className="card custom-card" style={{ marginLeft: '10%' }}>
                            <img src={img2} alt="Icon" className="card-icon" />
                            <h2>10.5k</h2>
                            <p>Sellers active in our site</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card custom-card highlight-card" style={{ marginLeft: '30%', marginTop: '-16.5%',backgroundColor: 'pink' }}>
                            <img src={img3} alt="Icon" className="card-icon" />
                            <h2>33k</h2>
                            <p>Monthly Product <br /> Sale</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card custom-card" style={{ marginLeft: '50%', marginTop: '-16.5%' }}>
                            <img src={img4} alt="Icon" className="card-icon" />
                            <h2>45.5k</h2>
                            <p>Customers active in our site</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card custom-card" style={{ marginLeft: '70%', marginTop: '-16.5%' }}>
                            <img src={img5} alt="Icon" className="card-icon" />
                            <h2>25k</h2>
                            <p>Annual gross sale in our site</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="image-card-container">
                <div className="image-card">
                    <img src={img6} style={{ height: '350px', width: '300px', borderRadius: '5px', backgroundColor: 'grey' }} />
                    <p>Tom Cruise</p>
                    <h6>Founder & Chairman</h6>
                    <img src={img9} style={{ height: '20px', width: '60px', backgroundColor: 'grey' }} />
                </div>
                <div className="image-card">
                    <img src={img7} style={{ height: '350px', width: '300px', borderRadius: '5px', backgroundColor: 'grey' }} />
                    <p>Emma Watson</p>
                    <h6>Managing Director</h6>
                    <img src={img9} style={{ height: '20px', width: '60px' }} />
                </div>
                <div className="image-card">
                    <img src={img8} style={{ height: '350px', width: '300px', borderRadius: '5px', backgroundColor: 'grey' }} />
                    <p>Will Smith</p>
                    <h6>Product Designer</h6>
                    <img src={img9} style={{ height: '20px', width: '60px' }} />
                </div>
            </div>

            <div className="row" style={{justifyContent: 'space-around'}}>
                <div style={{ marginRight: '60%' }}>
                    <img src={img10} style={{ height: '30px', width: '30px', borderRadius: '20px' }} />
                    <h4>FREE AND FAST DELIVERY</h4>
                    <p>Free delivery for all orders over $140</p>
                </div>

                <div style={{ marginTop: '-10%' }}>
                    <img src={img11} style={{ height: '30px', width: '30px', borderRadius: '20px' }} />
                    <h4>24/7 CUSTOMER SERVICE</h4>
                    <p>Friendly 24/7 customer support</p>
                </div>

                <div style={{ marginLeft: '60%', marginTop: '-10%' }}>
                    <img src={img12} style={{ height: '30px', width: '30px', borderRadius: '20px' }} />
                    <h4>MONEY BACK GUARANTEE</h4>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>




            <div className="bottom" style={{ height: '100%' }}>
                <h3 style={{ marginRight: '80%' }}>Exclusive</h3>
                <p style={{ marginRight: '80%' }}>Subscribe</p>
                <p style={{ marginRight: '80%' }}>Get 10% off your first order</p>
                <input type="text" placeholder="Enter your email" style={{ marginRight: '80%' }} /><span><i class="bi bi-arrow-right-square-fill"></i></span>

                <h3 style={{ marginTop: '-12%', marginRight: '50%' }}>Support</h3>
                <p style={{ marginRight: '50%' }}>111 Bijoy sarani, Dhaka, <br />
                    DH 1515, Bangladesh.
                </p>
                <br />
                <p style={{ marginRight: '50%' }}>exclusive @ gmail.com</p>
                <br />
                <p style={{ marginRight: '50%' }}>+88015-88888-9999</p>

                <h3 style={{ marginTop: '-18%', marginRight: '5%' }}>Account</h3>
                <p style={{ marginRight: '5%' }}>My Account</p>
                <p style={{ marginRight: '5%' }}>Login/Register</p>
                <p style={{ marginRight: '5%' }}>Cart</p>
                <p style={{ marginRight: '5%' }}>Wishlist</p>
                <p style={{ marginRight: '5%' }}>Shop</p>

                <h3 style={{ marginLeft: '20%', marginTop: '-19%' }}>Quick Link</h3>
                <p style={{ marginLeft: '20%' }}>Privacy Policy</p>
                <p style={{ marginLeft: '20%' }}>Terms Of Use</p>
                <p style={{ marginLeft: '20%' }}>FAQ</p>
                <p style={{ marginLeft: '20%' }}>Contact</p>

                <h3 style={{ marginLeft: '55%', marginTop: '-16%' }}>Download App</h3>
                <p style={{ marginLeft: '60%' }}>Save $3 with App New User Only</p>
                <img src={img13} style={{ height: '65px', width: '60px', marginLeft: '50%' }} />
                <img src={img14} style={{ height: '30px', width: '90px', marginLeft: '70%', marginTop: '-5%' }} />
                <img src={img15} style={{ height: '30px', width: '90px', marginLeft: '70%' }} />
                <br />

                <p class="seperator"></p>
                <p style={{ marginLeft: '60%' }}>Copyright Rimel 2022. All right reserved.</p>
            </div>


        </>
    );
};

export default Figma;


