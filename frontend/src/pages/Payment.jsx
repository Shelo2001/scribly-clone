import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/PaymentForm";
const stripePromise = loadStripe(
    "pk_test_51KShu0Cb4jB24EPJiKkcfxqPeTQfP20Ew8VPSh1l1dT8TE1GAEt9zECv83ZErRIzU8wzTQlGYLTjz4SZLlOmR1Bl00GfSeA21z"
);
const Payment = () => {
    return (
        <div style={{ marginTop: "300px" }}>
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </div>
    );
};

export default Payment;
