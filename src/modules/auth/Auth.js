import React, { Component } from 'react';

class Auth extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>this is Auth Page</h1>
                <button onClick={this.toHome}>to Home</button>
                <button onClick={this.toLogin}>to Login</button>
            </div>
        );
    }

    toHome = () => {
        let path = {
            pathname: '/home'
        }

        this.props.history.push(path);
    }

    toLogin = () => {
        let path = {
            pathname: '/login'
        }

        this.props.history.push(path);
    }
}

export default Auth;