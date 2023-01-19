import React from "react";
import "./Pricing.scss";

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h1>Simple, fair pricing.</h1>
            <p>
                Content marketing services for a simple, low-cost monthly fee.
            </p>
            <div className="pricing-card-container">
                <div className="card">1</div>
                <div className="card">2</div>
                <div className="card">3</div>
            </div>
        </div>
    );
};

export default Pricing;
