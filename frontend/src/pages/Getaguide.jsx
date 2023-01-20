import React, { useState } from "react";
import "./Getaguide.scss";
import img from "../assets/getaguide.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Getaguide = () => {
    const navigate = useNavigate();
    const [allValues, setAllValues] = useState({
        name: "",
        email: "",
        heard_about_us: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);
    const changeHandler = (e) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value });
    };
    const submithandler = async () => {
        setLoading(true);
        const { data } = await axios.post(
            `${import.meta.env.VITE_BASE_API_URL}/email`,
            allValues
        );
        if (data.success) {
            setLoading(false);
            Swal.fire({
                title: "Thank you for filling our form. Email will be sent.",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Return to main page",
            }).then((result) => {
                navigate("/");
            });
        }
    };

    return (
        <div className="getaguide-container">
            <div className="left">
                <img src={img} alt="getaguide" />
            </div>

            <div className="right">
                <div className="formcontainer">
                    <p className="formcontainer-header">Get a Quote</p>
                    <p className="formcontainer-desc">
                        To get started simply or find out more about Scribly,
                        fill in your details below and we'll be in touch ASAP.
                        We can't wait to hear from you!
                    </p>
                    {loading ? (
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#751aa6"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    ) : (
                        <div className="form">
                            <div>
                                <label for="name">Name</label>
                                <input
                                    onChange={changeHandler}
                                    placeholder="John Smith"
                                    name="name"
                                    id="name"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input
                                    onChange={changeHandler}
                                    placeholder="email@company.com (please provide your real email)"
                                    name="email"
                                    id="email"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label for="heard_about_us">
                                    How you heard about us
                                </label>
                                <input
                                    onChange={changeHandler}
                                    placeholder="e.g., Google search"
                                    name="heard_about_us"
                                    id="heard_about_us"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label for="description">
                                    Tell us about your project
                                </label>
                                <input
                                    onChange={changeHandler}
                                    placeholder="Your goal,the content you'd like, deadlines, etc."
                                    name="description"
                                    id="description"
                                    type="text"
                                />
                            </div>
                            <button
                                className="btn-primary"
                                onClick={submithandler}
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Getaguide;
