import { Table } from "reactstrap"
import ButtonComponent from "./ButtonComponent"
import moment from "moment";
import Pagination from "./Pagination";
import { useEffect, useMemo, useState } from "react";

function TableComponent(props) {
    const { handleEditClickToParent, handleDeleteClickToParent, accounts, departments, positions } = props;
    let PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return accounts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, accounts]);
    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>FullName</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Create Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData && currentTableData.map((account) => {
                        return (
                            <tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.email}</td>
                                <td>{account.userName}</td>
                                <td>{account.fullName}</td>
                                <td>{departments.filter((department) => +department.id === +account.department)[0]?.value}</td>
                                <td>{positions.filter((position) => +position.id === +account.position)[0]?.value}</td>
                                <td> {moment(account.createDate).format("YYYY-MM-DD")}</td>
                                <td><ButtonComponent clickButton={() => { handleEditClickToParent(account) }} color="warning" name="edit" /></td>
                                <td><ButtonComponent clickButton={() => { handleDeleteClickToParent(account) }} color="warning" name="delete" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={accounts.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>)
}
export default TableComponent