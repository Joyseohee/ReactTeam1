import ReviewInsert from "./ReviewInsert";
import "./ReviewList.scss";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect, useCallback, useRef } from "react";

import { ReviewWrite } from "../../store";

function ReviewList() {
  //const ReviewList = ({ ReviewText }) => {
  let [index, setIndex] = useState(0);
  let state = useSelector((state) => state);

  console.log(state.ReviewText);

  // const nextId = useRef(4);
  // const onInsert = useCallback(
  //   text => {
  //     const Rtext = {
  //     id : nextId.current,
  //     text,
  //     checked:false,
  //     };
  //     state(state.ReviewText[index].concat(Rtext));
  //     nextId.current += 1;  // 1씩 증가
  // },
  // [state.ReviewText[index]],
  // ); // insert end
  let dispatch = useDispatch();

  return (
    <div>
      <div className="ReviewList-Template">
        <div className="ReviewList-title"> 작품 리뷰 & 평점 </div>
        {/* <div className='ReviewList-content'>{state.ReviewText}</div> */}
        {/* <ReviewInsert onInsert={onInsert}/> */}
        <ReviewInsert
          onInsert={(onInsert) => {
            console.log(onInsert);
            dispatch(ReviewWrite(state.ReviewText[index]));
          }}
        />
        <div className="ReviewList-ListTable">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">아이디</th>
                <th scope="col">내용</th>
                <th scope="col">날짜</th>
                <th scope="col">좋아요</th>
              </tr>
            </thead>
            <tbody>
              {state.ReviewText.map((nothing, i) => (
                <tr key={{ i }}>
                  <th scope="row">{state.ReviewText[i].name}</th>
                  <td>{state.ReviewText[i].content}</td>
                  <td>{state.ReviewText[i].date}</td>
                  <td>{state.ReviewText[i].count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReviewList;

{
  /* <div className='ReviewList-name'>
                    {state.ReviewText[index].name} &nbsp;&nbsp;
                </div>
                <div className='ReviewList-content'>
                    {state.ReviewText[index].content}&nbsp;&nbsp;
                </div>
                <div className='ReviewList-count'>
                    {state.ReviewText[index].count}&nbsp;&nbsp;
                </div> */
}

// return(

//     <div>
//      <div className='ReviewList-Template'>
//          <div className='ReviewList-title'> 작품 리뷰 & 평점 </div>
//          {/* <div className='ReviewList-content'>{state.ReviewText}</div> */}
//          <ReviewInsert onInsert={onInsert}/>
//          <div className='ReviewList-ListTable' >

//          <table class="table">
//              <thead>
//                  <tr>
//                  <th scope="col">아이디</th>
//                  <th scope="col">내용</th>
//                  <th scope="col">좋아요</th>
//              </tr>
//          </thead>
//          <tbody>
//          {
//          state.ReviewText.map((nothing, i)=>
//      <tr key={{i}}>

//        <th scope="row">{state.ReviewText[i].name}</th>
//        <td>{state.ReviewText[i].content}</td>
//        <td>{state.ReviewText[i].count}</td>
//      </tr>
//      ) }
//      </tbody>

//  </table>
//      </div>
//  </div>
//  </div>
//      )
