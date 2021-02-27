import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./ReactApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ReactApp />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("reactapp")
);
