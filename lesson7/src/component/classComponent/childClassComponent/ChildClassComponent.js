import React, { Component } from 'react';
class ChildClassComponent extends Component {

    sendDataToParent = () => {
        const data = 'du lieu gui le cha';
        this.props.sendDataToChild(data);
    }
    sendDataToParent2 = () => {
        const data = 'du lieu gui le cha';
        this.props.sendDataToChild2(data);
    }
    render() {
        const { userName, age } = this.props;
        return (
            <React.Fragment>
                <div>userName: {userName}</div>
                <div>age: {age}</div>

                <button onClick={this.sendDataToParent}>send data</button>
                <button onClick={this.sendDataToParent2}>send data2</button>
            </React.Fragment>
        )
    }
}

ChildClassComponent.defaultProps = {
    userName: 'gia tri mac dinh userName',
    age: "gia tri mac dinh cho tuoi"
};

export default ChildClassComponent