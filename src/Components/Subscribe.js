
import React from "react";
import './Subscribe.css';

const Subscribe = () => {
    return(
        <div className="subscribe-section">
            <div className="subscribe-text">
                <h1>Subscribe to our <br/> newsletter today!</h1>
                <p>
                    Doctall aims at bringing the best of health information <br/>
                    that are really important to you easily.
                </p>
                <p> 
                    Also, helps to keep you abreast of emerging health <br/>
                    processes that will keep your body and mind in a better <br/>
                    shape
                </p>
            </div>
            <div className="subscribe-form">
                <form>
                    <label htmlFor="name">Full name*</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                    <p>
                        *By subscribing, you are agreeing to receive emails from Doctall,in line with our <br/>
                         Privacy Policy.Your details are safe with us. You can unsubscribe at any time.
                    </p>
                    <button type="submit">Subscribe to Newsletter</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
