import { Component } from "react";
import ButtonComponent from "../checkWillUnMount/ButtonComponent";

class ClassCompoent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        // console.log('constructor');
    }
    componentDidMount() {
        // console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, PrevState) {
        // console.log('prevProps', prevProps);
        // console.log('PrevState', PrevState);
    }
    increment = () => {
        this.setState((prevSate) => ({
            count: prevSate.count + 1
        }))
    }
    render() {
        return (
            <>
                <div> ClassCompoent </div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <br />
                {/* <ButtonComponent /> */}
            </>

        )
    }
}
export default ClassCompoent;