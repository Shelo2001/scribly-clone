import React from "react";
import "./PickaplanSection.scss";
import data from "../../assets/data.png";
import { Link } from "react-router-dom";

const PickaplanSection = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200"
            className="pickaplan-container"
        >
            <div className="pickaplan-section">
                <h1>
                    SMEs, creative agencies, startups and freelancers all over
                    the world have worked with us to grow their business.
                </h1>
                <img src={data} />
                <Link to="/pricing">
                    <button className="btn-primary">Pick a Plan</button>
                </Link>
            </div>
        </div>
    );
};

export default PickaplanSection;
