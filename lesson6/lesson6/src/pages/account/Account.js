import { useEffect, useMemo, useState } from "react";
import ButtonComponent from "../../component/ButtonComponent";
import TableComponent from "../../component/TableComponent";
import "./style.scss"
import ModalComponent from "../../component/ModalComponent";
import ACCOUNT from "../../constants/Account";
import DEPARTMENT from "../../constants/Department";
import POSITION from "../../constants/Position";
import swal from "sweetalert";
import Pagination from "../../component/Pagination";

function Account(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [dataEdit, setDataEdit] = useState({});
    const [accounts, setAccounts] = useState([])
    const [departments, setDepartments] = useState([])
    const [positions, setPositions] = useState([])
    let PageSize = 10;


    useEffect(() => {
        setAccounts(ACCOUNT);
        setDepartments(DEPARTMENT);
        setPositions(POSITION);
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return accounts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, accounts]);

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
            currentTableData.push(formData);
            setModal(!modal)
        } else {
            const index = currentTableData.findIndex((account) => account.id === formData.id);
            currentTableData[index] = formData;
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
                accounts={currentTableData}
                departments={departments}
                positions={positions}
                handleEditClickToParent={handleEdit}
                handleDeleteClickToParent={handleDelete}
            />
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={accounts.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
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




/*
1. Import các thư viện và components:

import { useEffect, useMemo, useState } from "react";
import ButtonComponent from "../../component/ButtonComponent";
import TableComponent from "../../component/TableComponent";
import "./style.scss";
import ModalComponent from "../../component/ModalComponent";
import ACCOUNT from "../../constants/Account";
import DEPARTMENT from "../../constants/Department";
import POSITION from "../../constants/Position";
import swal from "sweetalert";
import Pagination from "../../component/Pagination";

2. Khởi tạo state:

const [modal, setModal] = useState(false);
const [title, setTitle] = useState("");
const [dataEdit, setDataEdit] = useState({});
const [accounts, setAccounts] = useState([]);
const [departments, setDepartments] = useState([]);
const [positions, setPositions] = useState([]);
let PageSize = 10;


3. Sử dụng useEffect để tải dữ liệu ban đầu:
useEffect(() => {
    setAccounts(ACCOUNT);
    setDepartments(DEPARTMENT);
    setPositions(POSITION);
}, [])

4.Tạo danh sách tài khoản trang hiện tại bằng useMemo:
const [currentPage, setCurrentPage] = useState(1);
const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return accounts.slice(firstPageIndex, lastPageIndex);
}, [currentPage, accounts]);

currentPage là trạng thái lưu trữ trang hiện tại của danh sách tài khoản.
currentTableData sử dụng useMemo để tính toán danh sách tài khoản trang hiện tại dựa trên currentPage và accounts.

5. Các hàm xử lý sự kiện:

create(): Mở Modal để tạo tài khoản mới.
handleEdit(account): Mở Modal để chỉnh sửa tài khoản.
handleDelete(accountDel): Xóa tài khoản sau khi xác nhận.
handleFormData(formData, typeModal): Xử lý dữ liệu từ Modal sau khi tạo hoặc chỉnh sửa tài khoản.
Render các components:

6. Hiển thị nút "Create New Account" và danh sách tài khoản trong TableComponent.
Sử dụng Pagination để quản lý phân trang.
Sử dụng ModalComponent để thêm hoặc chỉnh sửa tài khoản.

 */
