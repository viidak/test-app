import React, { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";

import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";

import { Container } from "@material-ui/core";
// Router
import { Switch, Route, BrowserRouter } from "react-router-dom";

function ReactApp() {
    const [loggedInData, setLoggedInData] = useState([]);

    return (
        <Container className="app-container">
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login setLoggedInData={setLoggedInData} />
                    </Route>
                    <Route path="/register">
                        <Register setLoggedInData={setLoggedInData} />
                    </Route>
                    <Route path="/admin-view">
                        <AdminView loggedInData={loggedInData} />
                    </Route>
                    <Route path="/user-view">
                        <UserView loggedInData={loggedInData} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container>
    );
}

export default ReactApp;
