import React from "react";
import { Modal } from "react-bootstrap";

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

type TodoModalProps = {
    show : boolean;
    todo : Todo | null;
    handleClose : () => void;
};


const TodoModal : React.FC<TodoModalProps> = ({show, todo, handleClose}) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Todo 상세 정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>{todo?.text}</Modal.Body> {/* todo에 값이 있을 때만 렌더링 */}
            </Modal>
        </div>
    )
}

export default TodoModal;