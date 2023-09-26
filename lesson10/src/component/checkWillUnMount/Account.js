import { Component } from "react";

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        console.log('window.scrollY', window.scrollY);
    }

    render() {
        const { datas } = this.props;
        return (
            <>
                <ul>
                    <label>List Account</label>
                    {datas.map((data) => {
                        return (
                            <li key={data.id}>{data.name}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default Account;