import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import ButtonComponent from "./ButtonComponent";

function ModalComponent(props) {
    const { modal, toggle, title } = props;
    return (
        <Modal isOpen={modal} toggle={toggle} {...props}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <ButtonComponent color="primary" name="Create" />
                <ButtonComponent color="danger" name="Close" />
            </ModalFooter>
        </Modal>
    )
}
export default ModalComponent