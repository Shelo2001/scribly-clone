import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-coupon">
                Discount 20% Coupon Code:&nbsp;&nbsp;&nbsp;Shelo2001
            </div>
            <div className="navbar-container">
                <div className="left">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="right">
                    <Link to="/services">
                        <p>Services</p>
                    </Link>
                    <Link to="/pricing">
                        <p>Pricing</p>
                    </Link>
                    <Link to="/casestudies">
                        <p>Case Studies</p>
                    </Link>
                    <Link to="/getaguide">
                        <button className="btn-primary">Get a Guide</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
