import React, { Component } from 'react';

class First extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>this is First</h1>
                <button onClick={this.toSecond}>to Second</button>
            </div>
        );
    }

    toSecond = () => {
        let path = {
            pathname: '/home/second'
        }

        this.props.history.push(path);
    }
}

export default First;