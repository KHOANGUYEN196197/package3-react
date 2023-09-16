import { useState } from "react";
import ButtonComponent from "../../component/ButtonComponent";
import TableComponent from "../../component/TableComponent";
import "./style.scss"
import ModalComponent from "../../component/ModalComponent";

function Account(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");

    const toggle = () => {
        setModal(!modal);
        setTitle("Create new Account!!!!!")
    };
    return (
        <div className="container">
            <div onClick={toggle} className="box-button">
                <ButtonComponent color="primary" name="Create New Account" />
            </div>
            <h1>Danh sách Account</h1>
            <TableComponent />
            <ModalComponent title={title} isOpen={modal} toggle={toggle} />
        </div>
    )
}

export default Account;