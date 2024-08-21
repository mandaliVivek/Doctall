

import React from "react";
import img2 from "../assets/mark.jpg.png"; 
import img from '../assets/GoogleIcon.jpg.svg'; 
import img1 from '../assets/doctall_logo.jpg.svg'; 

const containerStyles = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
};

const imageStyles = {
    width: '100%',
    height: 'auto',
};

const formWrapperStyles = {
    padding: "4rem 2rem",
    borderRadius: "8px",
    backgroundColor: "white",
    maxWidth: "580px", 
    margin: "0 auto",
};

const inputStyles = {
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    width: "80%",
    marginRight: '35%', 
};

const buttonStyles = {
    padding: "0.75rem",
    backgroundColor: "#c53b20",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    textAlign: "center",
    width: "80%", 
    marginBottom: "1rem",
    marginRight: '32%',
};

const googleButtonStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0.50rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "0.8rem",
    width: "80%", 
    backgroundColor: "white",
    cursor: "pointer",
    margin: "0 auto",
    height: "10vh",
    marginRight: '36%', 
};

const labelStyles = {
    marginBottom: "0.5rem",
    fontSize: "1rem",
    color: "#344054",
    display: "block",
    textAlign: "left",
    fontFamily: "Visuelt Pro, sans-serif",
    marginLeft: "3%", 
};

const headingStyles = {
    textAlign: "center",
    color: "#0C5273",
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    marginRight: "40%",   
};

const subheadingStyles = {
    textAlign: "center",
    color: "#666A7A",
    fontSize: "0.75rem",
    marginBottom: "2rem",
    marginRight: "16%",
};

const textStyles = {
    color: 'rgb(102,112,133)',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Visuelt Pro',
    marginRight: '30%',
};

const mobileStyles = {
    '@media (max-width: 480px)': {
        inputStyles: {
            width: "200%", 
        },
        buttonStyles: {
            width: "200%", 
        },
        googleButtonStyles: {
            width: "200%",
        },
    },
};


function LoginForm() {
    return (
        <div className="container-fluid" style={containerStyles}>
            <div className="row w-100 h-100">
                <div className="col-md-6 p-0 d-none d-md-block">
                    <img src={img2} alt="Family" style={imageStyles} />
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div style={formWrapperStyles}>
                        <img src={img1} alt="Doctall Logo" style={{ height: '40px', marginBottom: '2rem' , marginRight: '60%' }} />

                        <h2 style={headingStyles}>Welcome back</h2>
                        <p style={subheadingStyles}>Enjoy personalized healthcare and  begin living better.</p>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="phonenumber" style={labelStyles}>Phone number</label>
                                <input
                                    type="number"
                                    id="phonenumber"
                                    name="phonenumber"
                                    required
                                    style={{...inputStyles,...mobileStyles.inputStyles}}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="passcode" style={labelStyles}>Passcode</label>
                                <input
                                    type="password"
                                    id="passcode"
                                    name="passcode"
                                    required
                                    style={{...inputStyles,...mobileStyles.inputStyles}}
                                    placeholder="Enter your passcode"
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <label style={{ color: 'rgb(52, 64, 84)', fontWeight: '500' }}>
                                    <input type="checkbox" />
                                    Remember for <br/> 30 days
                                </label>
                                <span style={{color: 'rgb(180, 51, 26)' , marginRight: '20%'}}>Forgot <br/> passcode</span>
                            </div>

                            <button type="submit" style={{...buttonStyles, ...mobileStyles.buttonStyles}}>Sign In</button>

                            <button disabled style={{...googleButtonStyles, ...mobileStyles.googleButtonStyles}}>
                                <img src={img} alt="Google" style={{ height: '20px', marginRight: '10px' }} />
                                <p style={{ marginTop: '5%' }}>Sign up with Google</p>
                            </button>
                        </form>

                        <p style={textStyles}>
                            Don't have an account? <span style={{ color: 'rgb(180,51,26)' }}>Sign up</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;











