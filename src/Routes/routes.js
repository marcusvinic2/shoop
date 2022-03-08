import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { Login, Home } from '../Components'

function Routes(){
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route exact component={Home} path="/" />
            </Switch>
        </Router>
    )
}

export default Routes