import { Component } from "react";
import Account from "./Account";

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowData: false,
            datas: []
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                this.setState({ datas: json })
            })
    }

    render() {
        const { isShowData, datas } = this.state;
        return (
            <>
                <button onClick={() => { this.setState({ isShowData: !isShowData }) }}>Show Data</button>
                {isShowData && <Account datas={datas} />}
                <ul style={{ height: '2000px' }}></ul>
            </>
        )
    }
}
export default ButtonComponent;