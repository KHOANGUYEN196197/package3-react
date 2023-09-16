import { Button } from "reactstrap";

function ButtonComponent(props) {
    const { name, color } = props;
    return (
        <>
            <Button color={color}>
                {name}
            </Button>
        </>
    )
}
export default ButtonComponent;