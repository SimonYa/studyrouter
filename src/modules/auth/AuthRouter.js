import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from './Auth';
import Home from '../home/Home'
import Login from '../login/Login'

class AuthRouter extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Auth} />
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AuthRouter;