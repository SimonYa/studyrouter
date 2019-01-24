import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import First from './First'

import Second from './Second'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" exact component={First} />
                    <Route path="/home/second" component={Second} />
                </Switch>
            </div>
        );
    }
}

export default Home;