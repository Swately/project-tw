import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './home';
import ElementClime from "../components/elementClime";
import ListComponent from "../components/listComponent";
import MunList from "../components/munList";


const WebPages = () => {
    return(
        <Routes>
            <Route path="/*" element= {<Home/>} />
            <Route path="/elementClime/:nes/:nmun" element = {<ElementClime/>} />
            <Route path="/listComponent/" element = {<ListComponent/>} />
            <Route path="/munList/:nes" element = {<MunList/>} />
        </Routes>
    );
};

export default WebPages;