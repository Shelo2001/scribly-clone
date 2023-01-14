import React from "react";
import landingimg from "../../assets/landingimg.svg";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import { Link } from "react-router-dom";
import "./HeroSection.scss";

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-section">
                <div className="container">
                    <div className="left">
                        <h1>
                            Unbeatable content marketing services to grow your
                            business.
                        </h1>
                        <p>
                            Scribly is a content marketing agency offering
                            scalable content marketing services for every
                            business type. Boost traffic and generate leads, all
                            for a simple monthly fee. No contracts. No hiring.
                            No hassle
                        </p>
                        <Link to="/getaguide">
                            <button className="btn-primary">
                                Get a FREE content strategy call
                            </button>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={landingimg} />
                    </div>
                </div>
                <div>
                    <p>TRUSTED BY BUSINESSES ALL OVER THE WORLD</p>
                </div>
                <div className="logos">
                    <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                    <img src={logo5} />
                    <img src={logo6} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
