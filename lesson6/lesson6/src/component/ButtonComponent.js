import { Button } from "reactstrap";

function ButtonComponent(props) {
    const { name, color, clickButton } = props;
    return (
        <Button onClick={clickButton} color={color}>
            {name}
        </Button>
    )
}
export default ButtonComponent;