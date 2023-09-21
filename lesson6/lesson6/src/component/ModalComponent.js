import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";
import moment, { months } from "moment";
import InputField from "./InputFiled";
import SelectField from "./SelectField";

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
        console.log(dataEdit.createDate);
    }, [dataEdit])
    const handleForm = (typeModal) => {
        handleFormDataToParent(formData, typeModal)
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
                    <InputField
                        id="id"
                        label="ID"
                        placeholder="ID Input"
                        value={formData.id}
                        type="text"
                        onChange={handleChange}
                    />

                    <InputField
                        id="email"
                        label="Email"
                        placeholder="Email Input"
                        value={formData.email}
                        type="email"
                        onChange={handleChange}
                    />

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

                    <SelectField
                        id="department"
                        label="Department"
                        value={formData.department}
                        type="select"
                        onChange={handleChange}
                        listOption={departments}
                    />

                    <SelectField
                        id="position"
                        label="Position"
                        value={formData.position}
                        type="select"
                        onChange={handleChange}
                        listOption={positions}
                    />

                    <FormGroup>
                        <Label for="createDate">
                            Create Date
                        </Label>
                        <Input
                            id="createDate"
                            name="createDate"
                            type="date"
                            value={moment(formData.createDate).format("YYYY-MM-DD")}
                            onChange={handleChange}

                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <ButtonComponent clickButton={() => { handleForm(title === defaultTitle ? 'create' : 'edit') }} color="primary" name={title === defaultTitle ? 'create' : 'edit'} />
                <ButtonComponent clickButton={close} color="danger" name="Close" />
            </ModalFooter>
        </Modal>
    )
}
export default ModalComponent