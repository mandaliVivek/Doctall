import React from 'react';
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import Header from "../Components/Header";
import Head from "../Components/Head";
import Carousel from "../Components/Carousel";
import Consult from "../Components/Consult";
import Body from "../Components/Body";
import Content from "../Components/Content";
import One from "../Components/One";
import Doctall from "../Components/Doctall";
import Partners from "../Components/Partners";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";

function Captain() {
    return (
        <div className="">
            <Navbar />
            <br/>
            <Main />
            <br/>
            {/* <Header /> */}
            <Head />
            {/* <br/> */}
            <Carousel />
            {/* <br/> */}
            <Consult />
            {/* <br/> */}
            <Body />
            {/* <br/> */}
            <Content />
            {/* <br/> */}
            <One />
            {/* <br/> */}
            <Doctall />
            {/* <br/> */}
            <Partners />
            {/* <br/> */}
            <Subscribe />
            {/* <br/> */}
            <Footer />
        </div>
    );
}

export default Captain;





