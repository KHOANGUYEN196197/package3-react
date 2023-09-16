import React, { Component } from 'react';
import ChildClassComponent from './childClassComponent/ChildClassComponent';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 0,
            count2: 0,
            count3: 0
        }
    }

    handleSetCount = () => {
        this.setState({
            count: this.state.count + 1,
            count1: this.state.count1 + 1
        })
    }

    handleDataToChild = (data) => {
        console.log('data to child', data);
    }
    handleDataToChild2 = (data) => {
        console.log('data to child2', data);
    }
    render() {
        return (
            <>
                <h1> Count: {this.state.count}</h1>
                <h1> Count1: {this.state.count1}</h1>
                <button onClick={this.handleSetCount}>set Count</button>
                <ChildClassComponent age="18" sendDataToChild={this.handleDataToChild} sendDataToChild2={this.handleDataToChild2} />
            </>
        )
    }
}

export default ClassComponent