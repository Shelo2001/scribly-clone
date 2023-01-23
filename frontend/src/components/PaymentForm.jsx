import React, { useState } from "react";
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentForm.scss";
import { useNavigate } from "react-router";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "black" },
            "::placeholder": { color: "black" },
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "black",
        },
    },
};

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(
                CardCvcElement,
                CardExpiryElement,
                CardNumberElement
            ),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    `${import.meta.env.VITE_BASE_API_URL}/payment`,
                    {
                        amount: 10000,
                        id,
                    }
                );
                console.log(response);

                if (response?.data[0] === "succeeded") {
                    Swal.fire(
                        "Payment Successful!",
                        "Thank you!",
                        "success"
                    ).then(navigate("/"));
                }
            } catch (error) {
                console.log("Error", error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <div className="payment-container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <CardNumberElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <CardExpiryElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <CardCvcElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <button className="btn-primary">Pay</button>
            </form>
        </div>
    );
}
