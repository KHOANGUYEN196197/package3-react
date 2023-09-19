import { Table } from "reactstrap"
import ButtonComponent from "./ButtonComponent"
import moment from "moment";

function TableComponent(props) {
    const { handleEditClickToParent, handleDeleteClickToParent, accounts, departments, positions } = props;
    return (
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
                {accounts.map((account) => {
                    return (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.email}</td>
                            <td>{account.userName}</td>
                            <td>{account.fullName}</td>
                            <td>{account.department}</td>
                            <td>{account.position}</td>
                            <td> {moment(account.createDate).format("YYYY-MM-DD")}</td>
                            <td><ButtonComponent clickButton={() => { handleEditClickToParent(account) }} color="warning" name="edit" /></td>
                            <td><ButtonComponent clickButton={() => { handleDeleteClickToParent(account.id) }} color="warning" name="delete" /></td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
    )
}
export default TableComponent