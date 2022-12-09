import { configureStore, createSlice } from "@reduxjs/toolkit";

// npm install @reduxjs/toolkit react-redux

let ReviewText = createSlice({
  name: "ReviewText", // 상태변수 이름
  initialState: [
    // 초기값
    {
      id: 0,
      name: "승민팤",
      content: "세상을 뒤집을 영화",
      date: "2022-05-10",
      count: 1, // 좋아요 수(마지막에 추가)
    },
    {
      id: 1,
      name: "성낙현",
      content: "심금을 울리는 영화",
      date: "2022-08-10",
      count: 1,
    },
    {
      id: 2,
      name: "오라클",
      content: "미래에서 왔어요 영화 좋아요",
      date: "2022-12-10",
      count: 3,
    },
  ],
  reducers: {
    //  변경함수 등록부분
    // increasebtn(이전 상태값, 파라미터 )
  },
  ReviewWrite(state, action) {
    state.push(action.payload);
  },
});
export let { ReviewWrite } = ReviewText.actions;

export default configureStore({
  reducer: {
    // user createSlice를 등록해 줌
    ReviewText: ReviewText.reducer,
  },
});
