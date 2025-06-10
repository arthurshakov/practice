import styled from "styled-components";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { selectModalText, selectModalOnCancel, selectModalOnConfirm, selectModalIsOpen } from "../../selectors";

const ModalLayout = ({className}) => {
  const text = useSelector(selectModalText);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalOnCancel);
  const isOpen = useSelector(selectModalIsOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button width="150px" onClick={onConfirm}>Да</Button>
          <Button width="150px" onClick={onCancel}>Отмена</Button>
        </div>
      </div>
    </div>
  )
};

export const Modal = styled(ModalLayout)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  isolation: isolate;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .box {
    width: 400px;
    background-color: white;
    padding: 40px;
    text-align: center;
  }

  .buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
`;
