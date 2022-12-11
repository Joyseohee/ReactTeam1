import React, { useState } from "react";
import "./Modal.scss";
import { useSelector } from "react-redux";
import ModalInsert from "./ModalInsert";

function Modal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  let [onInsert, setOnInsert] = useState("");

  return (
    <div className="Overlay">
      <div className="ModalWrap">
        <div className="Contents">
          {/* <div className="ModalImg" onInsert={onInsert}> */}
          <form>
            <div className="ModalImg">
              {/* <textarea>안녕</textarea> */}
              {/* <button className="ModalPageButton" onClick={Insert}> */}
              {/* <input type="text" id="content" content=""></input> */}
              <ModalInsert></ModalInsert>
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
