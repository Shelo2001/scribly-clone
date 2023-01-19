import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from "./pages/Pricing";
function App() {
    AOS.init();

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </Router>
    );
}

export default App;
