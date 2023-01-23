import React, { useEffect, useState } from "react";
import "./Cart.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    const [price, setPrice] = useState("");
    const [disabled, setDisabled] = useState(true);
    const { id } = useParams();
    const [allValues, setAllValues] = useState({
        name: "",
        surname: "",
        email: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
    });
    const [selectedId, setSelectedId] = useState(id);

    useEffect(() => {
        const getCountries = async () => {
            const { data } = await axios.get(
                `https://restcountries.com/v3.1/all`
            );

            setCountries(data);
        };
        if (selectedId == 1) {
            setPrice("599.00");
        } else if (selectedId == 2) {
            setPrice("1,450.00");
        } else {
            setPrice("4,300.00");
        }
        getCountries();
    }, []);

    const conditionHandler = () => {
        setDisabled(!disabled);
    };
    const handleChange = (e) => {
        setSelectedId(e.target.value);
        if (e.target.value == 1) {
            setPrice("599.00");
        } else if (e.target.value == 2) {
            setPrice("1,450.00");
        } else {
            setPrice("4,300.00");
        }
    };

    const changeHandler = (e) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value });
    };

    const submitHandler = async () => {
        let values = { ...allValues, price, country };
        await axios.post(
            `${import.meta.env.VITE_BASE_API_URL}/savebuyerinfo`,
            values
        );
        navigate("/payment");
    };

    return (
        <div className="cart-container">
            <div className="cart">
                <div className="left">
                    <p className="header">
                        Purchase your custom package by filling in your details
                        below — we can't wait to work with you 🎉 !
                    </p>
                    <p className="header-description">
                        Got any questions? Get in touch at
                        sheliaakaki47@gmail.com
                    </p>
                    <div className="cart-form-container">
                        <p>Full Name</p>
                        <div className="person-container">
                            <input
                                name="name"
                                onChange={changeHandler}
                                type="text"
                                placeholder="John"
                            />
                            <input
                                name="surname"
                                onChange={changeHandler}
                                type="text"
                                placeholder="Smith"
                            />
                        </div>

                        <p>Email</p>
                        <div className="email-container">
                            <input
                                onChange={changeHandler}
                                name="email"
                                type="email"
                                placeholder="johnsmith@example.com"
                            />
                        </div>

                        <p>Select a product</p>
                        <div className="card-items">
                            <input
                                checked={selectedId == 1 ? true : false}
                                type="radio"
                                name="card"
                                value="1"
                                id="card_one"
                                onChange={handleChange}
                            />
                            <input
                                type="radio"
                                checked={selectedId == 2 ? true : false}
                                name="card"
                                value="2"
                                id="card_two"
                                onChange={handleChange}
                            />
                            <input
                                type="radio"
                                checked={selectedId == 3 ? true : false}
                                value="3"
                                onChange={handleChange}
                                name="card"
                                id="card_three"
                            />
                            <label for="card_one">
                                <div class="card">
                                    <span>
                                        <i class="fa-solid fa-check"></i>
                                    </span>
                                    <p class="title">2023 Micro package</p>
                                    <p className="desc">
                                        2,000 words per month for you to use
                                        across as many projects as you like. SEO
                                        research and planning. Unlimited
                                        revisions.
                                    </p>
                                    <p>$599.00/month</p>
                                </div>
                            </label>
                            <label for="card_two">
                                <div class="card">
                                    <span>
                                        <i class="fa-solid fa-check"></i>
                                    </span>
                                    <p class="title">2023 Mega package</p>
                                    <p className="desc">
                                        6,500 words per month for you to use
                                        across as many blogs as you like. SEO
                                        research and planning. Unlimited
                                        revisions.
                                    </p>
                                    <p>$1,450.00/month</p>
                                </div>
                            </label>
                            <label for="card_three">
                                <div class="card">
                                    <span>
                                        <i class="fa-solid fa-check"></i>
                                    </span>
                                    <p class="title">2023 Turbo package</p>
                                    <p className="desc">
                                        20,000 words per month for you to use
                                        across as many blogs as you like. SEO
                                        research and planning. Unlimited
                                        revisions.
                                    </p>
                                    <p>$4,300.00/month</p>
                                </div>
                            </label>
                        </div>

                        <p>
                            Billing address (don't forget to select if this is
                            for a VAT registered company so that you can remove
                            added tax)
                        </p>
                        <div className="address-container">
                            <input
                                name="address"
                                onChange={changeHandler}
                                type="text"
                                placeholder="address"
                            />
                            <input
                                name="city"
                                onChange={changeHandler}
                                type="text"
                                placeholder="city"
                            />
                        </div>
                        <div className="additional-address-container">
                            <select
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="">Select Country</option>
                                {countries.map((c) => (
                                    <option value={c?.name?.common}>
                                        {c?.name?.common}
                                    </option>
                                ))}
                            </select>
                            <input
                                name="state"
                                onChange={changeHandler}
                                type="text"
                                placeholder="state/province/region"
                            />
                            <input
                                name="postal_code"
                                onChange={changeHandler}
                                type="text"
                                placeholder="postal code"
                            />
                        </div>
                        <div className="terms-container">
                            <input
                                onClick={conditionHandler}
                                type="checkbox"
                                id="termsAndConditions"
                                name="termsAndConditions"
                            />
                            <label for="termsAndConditions">
                                I agree to the terms and conditions of this
                                service
                            </label>
                        </div>
                        {disabled ? (
                            <button className="btn-disabled">Next</button>
                        ) : (
                            <button
                                className="btn-secondary"
                                onClick={submitHandler}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
                <div className="right">
                    <p className="header">Summary</p>
                    <div className="price-container">
                        <div>
                            <p>Total</p>
                            <p>USD</p>
                        </div>
                        <div>
                            <p>${price}</p>
                            <p>${price}/month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
