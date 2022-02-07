import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Routes, Route } from 'react-router-dom';

const Body = () => {
    return (
        <div>
                <Routes>

                    <Route path="/" exact component={Home}></Route>
                    <Route path="/menu" exact component={Menu}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                </Routes>
        </div>

    );
}
export default Body;

