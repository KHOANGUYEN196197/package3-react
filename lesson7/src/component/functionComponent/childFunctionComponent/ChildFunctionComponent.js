import React from 'react';
function ChildFunctionComponent(props) {
    const { userName, age, layout } = props;
    console.log(123, { userName, age });

    const sendDataToParent = () => {
        const data = 'hello word';
        props.sendDataToParent(data);
    }
    return (
        <React.Fragment>
            <div>childFunctionComponent</div>
            <div>userName: {userName}</div>
            <div>age: {age}</div>
            <button onClick={sendDataToParent}>button</button>

            {layout}

        </React.Fragment>
    )
}

ChildFunctionComponent.defaultProps = {
    userName: 'gia tri mac dinh userName',
    age: "gia tri mac dinh cho tuoi"
};


export default ChildFunctionComponent;