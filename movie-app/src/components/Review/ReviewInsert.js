import "./ReviewInsert.scss";
import { useCallback, useState } from "react";

const ReviewInsert = ({ ReviewInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      console.log(value);
      ReviewInsert(value);
      setValue(""); // value 값 초기화
      //   // submit 이벤트는 브라우저에서 새로고침을 발생시킴 -> 이를 방지하기 위해 이 함수를 홏ㄹ
      //----------------------

      e.preventDefault();
    },
    [ReviewInsert, value]
  );
  //----------------------------------------------Test ------------------------------------

  return (
    // <form className='ReiviewInsert' onSubmit={onSubmit}>
    <form className="ReiviewInsert" onSubmit={onSubmit}>
      <div class="ReiviewInsert-title">
        <input
          type="text"
          className="ReviewInput"
          placeholder="제목"
          onChange={onchange}
          name="name"
        />
        <label for="floatingInput">리뷰 제목</label>
      </div>
      <div class="ReiviewInsert-content">
        <textarea
          className="ReviewInput"
          type="text"
          placeholder="내용"
          onChange={onChange}
          reviewContent="content"
        ></textarea>
        <label for="floatingTextarea2">내용을 입력해주세요.</label>
      </div>

      {/* <input className='ReviewInput' placeholder='댓글을 입력해주세요' value={value} onChange={onChange}></input> 
            <input className='ReviewInput' placeholder='댓글을 입력해주세요' value={value} onChange={onChange}></input>  */}
      {/* <input type="hidden"className='ReviewInput' value={Date} onChange={onChange}></input>  */}
      <button className="ReviewButton" type="submit">
        ➕
      </button>
    </form>
  );
};

export default ReviewInsert;
