import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.scss";
import axios from "axios";

const Navbar = () => {
    const [code, setCode] = useState("");

    useEffect(() => {
        const getCouponCode = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_BASE_API_URL}/couponcode`
            );
            setCode(data?.coupon_code_name);
        };

        getCouponCode();
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-coupon">
                Discount 20% Coupon Code:&nbsp;&nbsp;&nbsp;{code}
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
                    <Link to="/getaguide">
                        <button className="btn-primary">Get a Guide</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
