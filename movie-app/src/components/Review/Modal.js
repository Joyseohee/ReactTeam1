import React from "react";
import "./scss/Modal.scss";

function Modal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <div className="Overlay">
      <div className="ModalWrap">
        <div className="Contents">
          {/* <div className="ModalImg" onInsert={onInsert}> */}
          <form>
            <div className="ModalImg">
              <button type="submit" className="ModalPageButton">
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => {
                    console.log(document.getElementById("content").value);
                  }}
                ></i>
                등록
              </button>
              <button className="ModalPageButton" onClick={handleClose}>
                닫기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
