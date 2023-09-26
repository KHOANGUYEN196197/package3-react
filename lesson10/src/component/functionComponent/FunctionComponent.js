import { useEffect, useState } from "react";
import ButtonComponent from "./checkClearUp/ButtonComponent";

function FunctionComponent() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        // console.log(' tuong tu componentDidMount');
    }, [])

    useEffect(() => {
        // console.log(' tuong tu componentDidUpdate co dieu kien');
    }, [count])

    useEffect(() => {
        // console.log(' tuong tu componentDidUpdate nhung ko co dieu kien');
    })

    const increment = () => {
        setCount(count + 1);
    }

    const increment2 = () => {
        setCount2(count2 + 1);
    }
    return (
        <>
            <div>Function Component</div>
            <h1> Count: {count}</h1>
            <h1> Count2: {count2}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={increment2}>increment2</button>
            <br />
            <ButtonComponent />
        </>
    )
}
export default FunctionComponent;