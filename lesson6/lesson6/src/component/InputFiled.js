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