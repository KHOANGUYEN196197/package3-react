import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";
import moment, { months } from "moment";
import InputField from "./InputFiled";
import SelectField from "./SelectField";

function ModalComponent(props) {
    const defaultTitle = 'Create new Account!!!!!'
    const { modal, toggle, title, close, dataEdit, departments, positions, handleFormDataToParent } = props;
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


/*
1.Import thư viện và components:
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";
import moment from "moment"; // Import moment từ thư viện moment
import InputField from "./InputFiled"; // Điều này có thể cần chỉnh sửa thành "InputField"
import SelectField from "./SelectField";


2.Khai báo component ModalComponent:

function ModalComponent(props) {
    const defaultTitle = 'Create new Account!!!!!'
    const { modal, toggle, title, close, dataEdit, departments, positions, handleFormDataToParent } = props;
    const [formData, setFormData] = useState({
        id: '',
        email: '',
        userName: '',
        fullName: '',
        department: '',
        position: '',
        createDate: ''
    })
Đây là khai báo component ModalComponent. Nó nhận vào một loạt các props và sử dụng một số state để quản lý dữ liệu của biểu mẫu trong modal.

3. Sử dụng useEffect để cập nhật formData khi dataEdit thay đổi:

useEffect(() => {
    setFormData(dataEdit);
}, [dataEdit]);

useEffect được sử dụng để theo dõi sự thay đổi của dataEdit. Khi dataEdit thay đổi, nó sẽ cập nhật formData để hiển thị dữ liệu tương ứng trong biểu mẫu.

4. Hàm handleForm và handleChange để xử lý biểu mẫu và sự kiện thay đổi:

const handleForm = (typeModal) => {
    handleFormDataToParent(formData, typeModal);
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
}
handleForm được gọi khi nút "Create" hoặc "Edit" trong modal được nhấn. Nó gọi handleFormDataToParent với dữ liệu biểu mẫu và loại modal (create hoặc edit).
handleChange được gọi khi bất kỳ trường nhập liệu nào trong modal thay đổi giá trị. Nó cập nhật formData dựa trên sự thay đổi của trường đó.


5. Render component ModalComponent:

Trong phần này, component ModalComponent sử dụng các components của reactstrap và các components tùy chỉnh (InputField, SelectField) để tạo giao diện modal.



*/