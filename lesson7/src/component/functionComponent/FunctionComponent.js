import React, { useState } from "react"
import ChildFunctionComponent from "./childFunctionComponent/ChildFunctionComponent"


const layout = (
    <div style={{ color: 'red' }}>test layout</div>
)

function FunctionComponent() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const data = {
        userName: 'khoa',
        age: 17
    }
    const handleDataToCHild = (data) => {
        console.log('data tu tu con len cha', data);
    }
    const handleSetCount = () => {
        setCount(prev => {
            console.log('22222', prev);
            return prev + 1
        })
        setCount1(count + 1)
    }
    return (
        <React.Fragment>

            <h1> Count: {count}</h1>
            <h1> Count1: {count1}</h1>
            <button onClick={handleSetCount}>set Count</button>
            <ChildFunctionComponent age={data.age} sendDataToParent={() => { handleDataToCHild() }} layout={layout} />
        </React.Fragment>
    )
}
export default FunctionComponent