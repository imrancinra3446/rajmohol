import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
        </div>

    );
}
export default Body;
// --------------
