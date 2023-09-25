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
    const [dataEdits, setDataEdits] = useState([]);
    const [accounts, setAccounts] = useState([])
    const [departments, setDepartments] = useState([])
    const [positions, setPositions] = useState([])
    const [dataAccountSelected, setDataAccountSelected] = useState([]);
    const [isCheckChangePagi, setIsCheckChangePagi] = useState(false);
    let PageSize = 10;


    useEffect(() => {
        setAccounts(ACCOUNT);
        setDepartments(DEPARTMENT);
        setPositions(POSITION);
    }, [])

    const handleSelectAccounts = (accounts) => {
        setDataAccountSelected(accounts)
    };

    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return accounts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, accounts]);

    const create = () => {
        setModal(!modal);
        setTitle("Create new Account!!!!!")
        setDataEdits([{
            id: '',
            email: '',
            userName: '',
            fullName: '',
            department: '',
            position: '',
            createDate: ''
        }])
    };
    const handleEdit = (account) => {
        setDataEdits([account])
        setTitle("Update Account!!!!!")
        setModal(!modal);
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
    const editSelectAccount = () => {
        setModal(!modal);
        setTitle("Update Account!!!!!");
        setDataEdits(dataAccountSelected);
    }
    const deleteSelectAccount = () => {
        swal({
            title: `Are you sure deleted ${dataAccountSelected.length} Account`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const newAccounts = accounts.filter((account => !dataAccountSelected.includes(account.id)));
                    setAccounts(newAccounts)
                    swal(`deleted ${dataAccountSelected.length} success`, {
                        icon: "success",
                    });
                }
            });

    }
    const changePagination = (page) => {
        setIsCheckChangePagi(!isCheckChangePagi)
        setCurrentPage(page);
    }
    return (
        <div className="container">
            <div className="box-button">
                <ButtonComponent
                    clickButton={create}
                    color="primary"
                    name="Create New Account"
                /> &nbsp;&nbsp;
                {dataAccountSelected.length > 0 && <>
                    <ButtonComponent
                        clickButton={editSelectAccount}
                        color="warning"
                        name="Edit Account"
                    />&nbsp;&nbsp;
                    <ButtonComponent
                        clickButton={deleteSelectAccount}
                        color="danger"
                        name="Delete Account"
                    />
                </>}


            </div>
            <h1>Danh sách Account</h1>
            <TableComponent
                accounts={currentTableData}
                departments={departments}
                positions={positions}
                isCheckChangePagi={isCheckChangePagi}
                handleEditClickToParent={handleEdit}
                handleDeleteClickToParent={handleDelete}
                selectAccountsToParent={handleSelectAccounts}
            />
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={accounts.length}
                pageSize={PageSize}
                onPageChange={page => changePagination(page)}
            />
            <ModalComponent
                accounts={accounts}
                departments={departments}
                positions={positions}
                dataEdits={dataEdits}
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
