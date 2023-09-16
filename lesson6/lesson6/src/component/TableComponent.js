import { Table } from "reactstrap"
import ButtonComponent from "./ButtonComponent"

function TableComponent() {
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
                <tr>
                    <td>1</td>
                    <td>Email</td>
                    <td>Username</td>
                    <td>FullName</td>
                    <td>Department</td>
                    <td>Position</td>
                    <td>Create Date</td>
                    <td><ButtonComponent color="warning" name="edit" /></td>
                    <td><ButtonComponent color="warning" name="delete" /></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Email</td>
                    <td>Username</td>
                    <td>FullName</td>
                    <td>Department</td>
                    <td>Position</td>
                    <td>Create Date</td>
                    <td><ButtonComponent color="warning" name="edit" /></td>
                    <td><ButtonComponent color="warning" name="delete" /></td>
                </tr>   <tr>
                    <td>1</td>
                    <td>Email</td>
                    <td>Username</td>
                    <td>FullName</td>
                    <td>Department</td>
                    <td>Position</td>
                    <td>Create Date</td>
                    <td><ButtonComponent color="warning" name="edit" /></td>
                    <td><ButtonComponent color="warning" name="delete" /></td>
                </tr>
            </tbody>
        </Table>
    )
}
export default TableComponent