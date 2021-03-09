/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Fathers for Parental Equity</h1>
                <Typed
                className="typed-text"
                strings={["Social Media","Legal" ,"Financial","Family Entertainment","Resources",]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact us</a>
            </div>
        </div>
    )
}

export default Header
