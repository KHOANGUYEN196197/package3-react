import { Input, Table } from "reactstrap"
import ButtonComponent from "./ButtonComponent"
import moment from "moment";
import { useEffect, useState } from "react";

function TableComponent(props) {
    const { selectAccountsToParent } = props;
    const [selectAll, setSelectAll] = useState(false);
    const [selectedAccounts, setSelectedAccounts] = useState([]);
    const { handleEditClickToParent, handleDeleteClickToParent, accounts, departments, positions, isCheckChangePagi } = props;

    useEffect(() => {
        setSelectAll(false);
        setSelectedAccounts([])

    }, [isCheckChangePagi])

    useEffect(() => {
        selectAccountsToParent(selectedAccounts)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (selectedAccounts.length === 10) {
            setSelectAll(true)
        } else {
            setSelectAll(false)
        }
    }, [selectedAccounts, selectedAccounts.length])

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedAccounts(accounts.map(account => account));
        } else {
            setSelectedAccounts([])
        }
    }
    const handleAccountSelect = (account) => {
        if (selectedAccounts.includes(account)) {
            const unCheckAccount = selectedAccounts.filter(id => id !== account);
            setSelectedAccounts(unCheckAccount);
        } else {
            setSelectedAccounts([...selectedAccounts, account]);
        }
        console.log(selectedAccounts.length);
    }
    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th><Input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
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
                    {accounts && accounts.map((account) => {
                        const isSelected = selectedAccounts.includes(account);
                        return (
                            <tr key={account.id}>
                                <td> <Input type="checkbox" checked={isSelected} onChange={() => { handleAccountSelect(account) }} /></td>
                                <td>{account.id}</td>
                                <td>{account.email}</td>
                                <td>{account.userName}</td>
                                <td>{account.fullName}</td>
                                <td>{departments.filter((department) => +department.id === +account.department)[0]?.value}</td>
                                <td>{positions.filter((position) => +position.id === +account.position)[0]?.value}</td>
                                <td> {moment(account.createDate).format("YYYY-MM-DD")}</td>
                                <td><ButtonComponent clickButton={() => { handleEditClickToParent(account) }} color="warning" name="edit" /></td>
                                <td><ButtonComponent clickButton={() => { handleDeleteClickToParent(account) }} color="danger" name="delete" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>)
}
export default TableComponent