import { useState } from "react";
import ButtonComponent from "../../component/ButtonComponent";
import TableComponent from "../../component/TableComponent";
import "./style.scss"
import ModalComponent from "../../component/ModalComponent";
import ACCOUNT from "../../constants/Account";
import DEPARTMENT from "../../constants/Department";
import POSITION from "../../constants/Position";
import swal from "sweetalert";

function Account(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [dataEdit, setDataEdit] = useState({})

    const create = () => {
        setModal(!modal);
        setTitle("Create new Account!!!!!")
        setDataEdit({
            id: '',
            email: '',
            userName: '',
            fullName: '',
            department: '',
            position: '',
            createDate: ''
        })
    };
    const handleEdit = (account) => {
        setModal(!modal);
        setTitle("Update Account!!!!!")
        setDataEdit(account)
    }
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    const handleFormData = (formData) => {
        console.log('tesst123', formData);
    }
    return (
        <div className="container">
            <div className="box-button">
                <ButtonComponent
                    clickButton={create}
                    color="primary"
                    name="Create New Account"
                />
            </div>
            <h1>Danh sách Account</h1>
            <TableComponent
                accounts={ACCOUNT}
                departments={DEPARTMENT}
                positions={POSITION}
                handleEditClickToParent={handleEdit}
                handleDeleteClickToParent={handleDelete}
            />
            <ModalComponent
                accounts={ACCOUNT}
                departments={DEPARTMENT}
                positions={POSITION}
                dataEdit={dataEdit}
                title={title}
                isOpen={modal}
                toggle={create}
                close={() => { setModal(!modal) }}
                handleFormDataToParent={handleFormData}
            />
        </div>
    )
}

export default Account;