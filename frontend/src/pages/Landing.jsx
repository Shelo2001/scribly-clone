import React from "react";
import HeroSection from "./landing-sections/HeroSection";
import PickaplanSection from "./landing-sections/PickaplanSection";
import VideoSection from "./landing-sections/VideoSection";

const Landing = () => {
    return (
        <div>
            <HeroSection />
            <VideoSection />
            <PickaplanSection />
        </div>
    );
};

export default Landing;
