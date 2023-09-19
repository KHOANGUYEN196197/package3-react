import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";
import moment, { months } from "moment";

function ModalComponent(props) {
    const defaultTitle = 'Create new Account!!!!!'
    const { modal, toggle, title, close, dataEdit, departments, positions, accounts, handleFormDataToParent } = props;
    const [formData, setFormData] = useState({
        id: '',
        email: '',
        userName: '',
        fullName: '',
        department: '',
        position: '',
        createDate: ''
    })
    useEffect(() => {
        setFormData(dataEdit)
    }, [dataEdit])
    const handleForm = () => {
        handleFormDataToParent(formData)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })

    }
    return (
        <Modal isOpen={modal} toggle={toggle} {...props}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>

                <Form>
                    <FormGroup>
                        <Label for="id">
                            ID
                        </Label>
                        <Input
                            id="id"
                            name="id"
                            placeholder="ID Input"
                            value={formData.id}
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email Input"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">
                            Username
                        </Label>
                        <Input
                            id="username"
                            name="userName"
                            placeholder="Username Input"
                            type="text"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="fullName">
                            FullName
                        </Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            placeholder="FullName Input"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}

                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="department">
                            Department
                        </Label>
                        <Input
                            id="department"
                            name="department"
                            type="select"
                            value={formData.department}
                            onChange={handleChange}

                        >
                            <option value="">Select Department</option>
                            {departments.map((department) => {
                                return (
                                    <option key={department.id} value={department.id}>{department.value}</option>
                                )
                            })}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="position">
                            Position
                        </Label>
                        <Input
                            id="position"
                            name="position"
                            type="select"
                            value={formData.position}
                            onChange={handleChange}

                        >
                            <option value="">Select Position</option>
                            {positions.map((position) => {
                                return (
                                    <option key={position.id} value={position.id}>{position.value}</option>
                                )
                            })}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="createDate">
                            Create Date
                        </Label>
                        <Input
                            id="createDate"
                            name="createDate"
                            type="date"
                            value={formData.createDate}
                            onChange={handleChange}

                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <ButtonComponent clickButton={handleForm} color="primary" name={title === defaultTitle ? 'create' : 'edit'} />
                <ButtonComponent clickButton={close} color="danger" name="Close" />
            </ModalFooter>
        </Modal>
    )
}
export default ModalComponent