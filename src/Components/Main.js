
import React from "react";
import img from "../assets/doctall_logo.jpg.svg";
import img1 from "../assets/user.jpg.svg";
import { useNavigate } from "react-router-dom";
//import LoginForm from "./LoginForm";


function Main() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "Visuelt Pro",
      padding: "0 2vw",
      boxSizing: "border-box",
      backgroundColor: "white",
      height: "10vh",
      width: "90vw",
      cursor: "pointer",
    },
    logo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    logoImg: {
      height: "50px",
      width: "100px",
      marginLeft: "30%",
    },
    tagline: {
      fontSize: "smaller",
      color: "#008080",
      margin: 0,
      marginLeft: "15%",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "2vw",
      marginLeft: "10%",
      fontWeight: "bold",
      fontStyle: "normal",
    },
    navItem: {
      margin: 0,
      fontSize: "small",
      color: "black",
      display: isMobile ? "none" : "block", 
    },
    loginBtn: {
      fontSize: "0.9rem",
      fontWeight: 400,
      lineHeight: 1.75,
      borderRadius: "8px",
      backgroundColor: "orangered",
      padding: "8px 16px",
      color: "white",
      border: "none",
      fontWeight: "bold",
      fontStyle: "normal",
      width: "max-content",
      display: isMobile ? "none" : "block", 
    },
    loginIcon: {
      height: "20px",
      width: "20px",
      display: isMobile ? "block" : "none", 
    },
    "@media (max-width: 768px)": {
      header: {
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
        padding: "10px",
      },
      logo: {
        alignItems: "center",
      },
      logoImg: {
        margin: 0,
        width: "60px",
      },
      tagline: {
        marginLeft: 0,
      },
      nav: {
        flexDirection: "column",
        gap: "10px",
        marginLeft: 0,
        alignItems: "center",
      },
      navItem: {
        fontSize: "smaller",
      },
      loginBtn: {
        fontSize: "0.875rem",
        padding: "8px 16px",
        display: "none", 
      },
      loginIcon: {
        display: "block", 
      },
    },
    "@media (max-width: 480px)": {
      header: {
        padding: "5px 1vw",
      },
      logoImg: {
        width: "50px",
      },
      navItem: {
        fontSize: "x-small",
      },
      loginBtn: {
        fontSize: "0.75rem",
        padding: "6px 10px",
        width: "fit-content",
        display: "none", 
      },
      loginIcon: {
        display: "block", 
      },
    },
  };

  const history = useNavigate();
  const fun = () => {
      history('/loginform')
  }

  return (
    <>
      <div style={styles.header}>
        <div style={styles.logo}>
          <img src={img} alt="Logo" style={styles.logoImg} />
        </div>
        <div style={styles.nav}>
          <p style={styles.navItem}>Who we are?</p>
          <p style={styles.navItem}>FAQs</p>
          <button style={styles.loginBtn} onClick={fun}>Login/Signup</button>
          {/* <LoginForm /> */}
          <img
            src={img1}
            alt="Login Icon"
            style={styles.loginIcon}
          />
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

export default Main;






