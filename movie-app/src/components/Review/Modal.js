import React from "react";
import './Modal.scss';

function Modal({ onClose }) {
    const handleClose = () => {
      onClose?.();
    };
    return (
        <div className="Overlay">
          <div className="ModalWrap">
            <button className="ModalPageButton" onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="Contents">
              <div className="ModalImg">
                <textarea>안녕</textarea>
              <h1>리뷰를 입력해주세요</h1>
              </div>
              <button className="ModalPageButton" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
    );
  }

  export default Modal;