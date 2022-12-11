import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalInsert = ({ onInsert }) => {
  //   const [value, setValue] = useState("");
  //const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열
  const navigate = useNavigate("");
  let [content, setContent] = useState("");
  //   let [content, setContent] = useState([]); // 가져올 영화 담을 배열
  //   const onChange = useCallback((e) => {
  //     setContent(e.target.content);
  //   }, []);

  //   const onSubmit = useCallback(
  //     (e) => {
  //       console.log(content);
  //       onInsert(content);
  //       setContent(""); // value 값 초기화
  //       // submit 이벤트는 브라우저에서 새로고침을 발생시킴 -> 이를 방지하기 위해 이 함수를 홏ㄹ
  //       e.preventDefault();
  //     },
  //     [onInsert, content]
  //   );
  return (
    //     <form className="ReviewTestInsert" onSubmit={onSubmit}>
    //       <input
    //         className="ReviewTestInput"
    //         placeholder="리뷰를 입력해주세요"
    //         content={content}
    //         onChange={onChange}
    //       ></input>
    //       <button
    //         className="ModalPageButton"
    //         type="submit"
    //         onClick={() => {
    //           console.log(document.getElementById("content").value);
    //         }}
    //       ></button>
    //     </form>
    //   );
    // };

    <form className="ReviewTestInsert">
      <input
        className="ReviewTestInput"
        placeholder="리뷰를 입력해주세요"
        reviewdata={content}
      ></input>
      <button
        className="ModalPageButton"
        onClick={() => {
          console.log(document.getElementById("content").value);
          navigate("/Review", {
            state: {
              id: "powermoney",
              content: `${content}`,
            },
          });
        }}
      ></button>
    </form>
  );
};

export default ModalInsert;
