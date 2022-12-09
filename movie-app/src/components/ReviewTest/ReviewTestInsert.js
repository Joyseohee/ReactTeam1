import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./ReviewTestInsert.scss";

const ReviewTestInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      console.log(value);
      onInsert(value);
      setValue(""); // value 값 초기화
      // submit 이벤트는 브라우저에서 새로고침을 발생시킴 -> 이를 방지하기 위해 이 함수를 홏ㄹ
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className="ReviewTestInsert" onSubmit={onSubmit}>
      <input
        className="ReviewTestInput"
        placeholder="리뷰를 입력해주세요"
        value={value}
        onChange={onChange}
      ></input>
      <button className="ReviewTestButton" type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default ReviewTestInsert;
