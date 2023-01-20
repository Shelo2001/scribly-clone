import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Getaguide from "./pages/Getaguide";
function App() {
    AOS.init();

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/getaguide" element={<Getaguide />} />
                <Route path="/pricing/:id" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
