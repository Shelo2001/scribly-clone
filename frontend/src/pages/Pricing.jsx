import React from "react";
import "./Pricing.scss";
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h1>Simple, fair pricing.</h1>
            <p>
                Content marketing services for a simple, low-cost monthly fee.
            </p>
            <div className="pricing-card-container">
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    className="card"
                >
                    <div className="card-header">
                        <p>Micro Package</p>
                    </div>
                    <div className="card-price">$599/ mo</div>
                    <div className="card-description">
                        <p className="description">
                            Perfect to get your blog off the ground
                        </p>
                        <p className="description-pricing">
                            2,000 words/month (2-3 posts total)
                        </p>
                    </div>
                    <div className="card-description-items">
                        <p>Keyword Research + Topic Creation</p>
                        <p>Monthly Content Calendar</p>
                        <p>Search Intent Strategy</p>
                        <p>Dedicated Account Manager</p>
                        <p>No Revision Cap</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/pricing/1">
                            <button className="btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    className="card"
                >
                    <div className="card-header">
                        <p>Mega Package</p>
                    </div>
                    <div className="card-price">$1450/ mo</div>
                    <div className="card-description">
                        <p className="description">
                            Ideal plan to publish weekly content
                        </p>
                        <p className="description-pricing">
                            6,500 words/month (5-7 posts total)
                        </p>
                    </div>
                    <div className="card-description-items">
                        <p>Keyword Research + Topic Creation</p>
                        <p>Monthly Content Calendar</p>
                        <p>Search Intent Strategy</p>
                        <p>Dedicated Account Manager</p>
                        <p>No Revision Cap</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/pricing/2">
                            <button className="btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    className="card"
                >
                    <div className="card-header">
                        <p>Turbo Package</p>
                    </div>
                    <div className="card-price">$4300/ mo</div>
                    <div className="card-description">
                        <p className="description">
                            Publish daily and see your traffic soar
                        </p>
                        <p className="description-pricing">
                            20,000 words/month (~20 posts total)
                        </p>
                    </div>
                    <div className="card-description-items">
                        <p>Keyword Research + Topic Creation</p>
                        <p>Monthly Content Calendar</p>
                        <p>Search Intent Strategy</p>
                        <p>Dedicated Account Manager</p>
                        <p>No Revision Cap</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/pricing/3">
                            <button className="btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <p className="pricing-footer">
                    Are you an agency or freelancer looking to offer content to
                    your clients? Take a look at our Partner Program.
                </p>
                <p className="pricing-footer">
                    Need a one-off project? Take a look here.
                </p>
            </div>
        </div>
    );
};

export default Pricing;
