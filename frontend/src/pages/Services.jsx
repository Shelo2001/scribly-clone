import React from "react";
import "./Services.scss";
import services from "../assets/services.png";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="services">
            <div className="services-container">
                <div className="left">
                    <p>OUR SERVICES</p>
                    <h1>Content Strategy</h1>
                    <p>
                        Content is a powerful tool for scaling your business –
                        and fast. But without a long-term plan, even the
                        greatest content in the world won’t be enough. With
                        content strategy services from Scribly, you get the best
                        of both worlds.
                    </p>
                    <Link to="/pricing">
                        <button className="btn-primary">Find Out More</button>
                    </Link>
                </div>
                <div className="right">
                    <img src={services} />
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                className="services-card-container"
            >
                <div className="services-card">
                    <p className="services-card-header">
                        Ready to build your company’s future on a foundation of
                        great content
                    </p>
                    <Link to="/getaguide">
                        <button className="btn">Say Hello Today</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
