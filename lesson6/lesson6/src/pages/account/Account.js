import { useEffect, useState } from "react";
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
    const [dataEdit, setDataEdit] = useState({});
    const [accounts, setAccounts] = useState([])
    const [departments, setDepartments] = useState([])
    const [positions, setPositions] = useState([])


    useEffect(() => {
        setAccounts(ACCOUNT);
        setDepartments(DEPARTMENT);
        setPositions(POSITION);
    }, [])

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
    const handleDelete = (accountDel) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const newAccounts = accounts.filter((account => +account.id !== +accountDel.id));
                    setAccounts(newAccounts)
                    swal(`deleted ${accountDel.fullName} success`, {
                        icon: "success",
                    });
                }
            });
    }
    const handleFormData = (formData, typeModal) => {
        if (typeModal === 'create') {
            accounts.push(formData);
            setModal(!modal)
        } else {
            const index = accounts.findIndex((account) => account.id === formData.id);
            accounts[index] = formData;
            setModal(!modal)
        }

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
                accounts={accounts}
                departments={departments}
                positions={positions}
                handleEditClickToParent={handleEdit}
                handleDeleteClickToParent={handleDelete}
            />
            <ModalComponent
                accounts={accounts}
                departments={departments}
                positions={positions}
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