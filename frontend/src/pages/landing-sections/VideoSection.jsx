import React from "react";
import "./VideoSection.scss";
import features1 from "../../assets/features1.svg";
import features2 from "../../assets/features2.svg";
import features3 from "../../assets/features3.svg";

const VideoSection = () => {
    return (
        <div className="video-container">
            <h1>Content marketing services designed to deliver results.</h1>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zv8Ek1dBJTc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
            <div className="features-row">
                <div
                    data-aos="fade-up-left"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    className="features"
                >
                    <div>
                        <p className="features-header">
                            Execute an actionable content strategy, without
                            lifting a finger.
                        </p>
                        <p className="features-description">
                            From day one, you’ll get a dedicated project manager
                            who'll work with you to define your content goals
                            and create a tailored content marketing strategy.
                            We'll get our SEO analyst to
                            <span> research your target keywords</span> and
                            craft you a <span>monthly content calendar.</span>
                        </p>
                    </div>
                    <img src={features1} />
                </div>
                <div
                    data-aos="fade-up-right"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    className="features"
                >
                    <img src={features2} />
                    <div>
                        <p className="features-header">
                            Get your content written by the best copywriters
                            around.
                        </p>
                        <p className="features-description">
                            You can trust us to write
                            <span> content that drives results</span>— every
                            time. We're a team of highly experienced, native
                            English writers and editors who've been published in
                            some of the world's leading publications, so you can
                            count on us for quality.
                        </p>
                    </div>
                </div>
                <div
                    data-aos="fade-up-left"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    className="features"
                >
                    <div>
                        <p className="features-header">
                            Drive more traffic. Convert more leads.
                        </p>
                        <p className="features-description">
                            Tell us your commercial objectives and we'll help
                            you spend your content package wisely. We can craft
                            SEO optimized blog content, high converting landing
                            pages, effective ads, and so much more —
                            <span>
                                all the copy you need to grow your business.
                            </span>
                        </p>
                    </div>
                    <img src={features3} />
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
