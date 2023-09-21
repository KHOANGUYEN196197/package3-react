import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
    const { id, label, placeholder, value, type, onChange } = props
    return (
        <FormGroup>
            <Label for={id}>
                {label}
            </Label>
            <Input
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChange}
            />
        </FormGroup>
    )
}
export default InputField;


/*
1.Import thư viện và components:
import { FormGroup, Input, Label } from "reactstrap";

2.Khai báo component InputField:

function InputField(props) {
    const { id, label, placeholder, value, type, onChange } = props;
    Đây là khai báo component InputField. Nó nhận vào một props (các thuộc tính) với các thuộc tính sau:
    id: ID của trường nhập liệu.
    label: Nhãn (label) cho trường nhập liệu.
    placeholder: Chữ gợi ý (placeholder) cho trường nhập liệu.
    value: Giá trị của trường nhập liệu.
    type: Loại dữ liệu của trường nhập liệu (ví dụ: "text", "password", "email", ...).
    onChange: Hàm xử lý sự kiện thay đổi giá trị của trường nhập liệu.

3.Render component InputField:

    return (
    <FormGroup>
        <Label for={id}>
            {label}
        </Label>
        <Input
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={onChange}
        />
    </FormGroup>
    )   
    Trong phần này, component InputField sử dụng FormGroup, Label, và Input của reactstrap để tạo ra trường nhập liệu. Các thuộc tính của các components này được đặt dựa trên các thuộc tính props của component InputField:
    FormGroup: Dùng để bao bọc trường nhập liệu và cung cấp kiểu dáng cho nó.
    Label for={id}: Nhãn của trường nhập liệu, sử dụng thuộc tính for để liên kết với trường có id tương ứng.
    Input: Trường nhập liệu thực sự, với các thuộc tính như id, name, placeholder, value, type, và onChange được lấy từ props.

*/