import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import ButtonComponent from "./ButtonComponent";
import React, { useEffect, useState } from "react";
import moment, { months } from "moment";
import InputField from "./InputFiled";
import SelectField from "./SelectField";

function ModalComponent(props) {
    const defaultTitle = 'Create new Account!!!!!'
    const { modal, toggle, title, close, dataEdits, departments, positions, handleFormDataToParent } = props;
    const [formDatas, setFormDatas] = useState([])
    useEffect(() => {
        setFormDatas(dataEdits);
    }, [toggle])



    const handleForm = (typeModal) => {
        handleFormDataToParent(formDatas, typeModal)
    }
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updateFormDatas = [...formDatas];
        const formDataUpdate = updateFormDatas[index];
        formDataUpdate[name] = value;
        setFormDatas(updateFormDatas)

    }
    return (
        <Modal isOpen={modal} toggle={toggle} {...props}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {formDatas && formDatas.length > 0 && formDatas.map((formData, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Label style={{ color: 'red' }}>Form Account No {index + 1}</Label>
                            <br />
                            <Form>
                                {title === defaultTitle ? <InputField
                                    id="id"
                                    label="ID"
                                    placeholder="ID Input"
                                    value={formData.id}
                                    type="text"
                                    onChange={(e) => { handleChange(e, index) }}
                                /> : null}

                                <InputField
                                    id="email"
                                    label="Email"
                                    placeholder="Email Input"
                                    value={formData.email}
                                    type="email"
                                    onChange={(e) => { handleChange(e, index) }}
                                />

                                <InputField
                                    id="username"
                                    label="Username"
                                    placeholder="Username Input"
                                    value={formData.username}
                                    type="text"
                                    onChange={(e) => { handleChange(e, index) }}
                                />

                                <InputField
                                    id="fullName"
                                    label="FullName"
                                    placeholder="FullName Input"
                                    value={formData.fullName}
                                    type="text"
                                    onChange={(e) => { handleChange(e, index) }}
                                />


                                <SelectField
                                    id="department"
                                    label="Department"
                                    value={formData.department}
                                    type="select"
                                    onChange={(e) => { handleChange(e, index) }}
                                    listOption={departments}
                                />

                                <SelectField
                                    id="position"
                                    label="Position"
                                    value={formData.position}
                                    type="select"
                                    onChange={(e) => { handleChange(e, index) }}
                                    listOption={positions}
                                />

                                <InputField
                                    id="createDate"
                                    label="CreateDate"
                                    placeholder="CreateDate Input"
                                    value={moment(formData.createDate).format("YYYY-MM-DD")}
                                    type="date"
                                    onChange={(e) => { handleChange(e, index) }}
                                />


                            </Form>
                        </React.Fragment>
                    )
                })}
            </ModalBody>
            <ModalFooter>
                <ButtonComponent clickButton={() => { handleForm(title === defaultTitle ? 'create' : 'edit') }} color={title === defaultTitle ? 'primary' : 'warning'} name={title === defaultTitle ? 'create' : 'edit'} />
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