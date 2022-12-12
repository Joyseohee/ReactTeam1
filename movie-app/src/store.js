import { configureStore, createSlice } from "@reduxjs/toolkit";

const getInitialReview = () => {
  // getting todo list
  const localReviewList = window.localStorage.getItem("reviewList");
  // if todo list is not empty
  if (localReviewList) {
    return JSON.parse(localReviewList);
  }
  window.localStorage.setItem("reviewList", []);
  return [];
};

const initialValue = {
  filterStatus: "all",
  reviewList: getInitialReview(),
};

export const review = createSlice({
  name: "review",
  initialState: initialValue,
  reducers: {
    addReview: (state, action) => {
      state.reviewList.push(action.payload);
      const reviewList = window.localStorage.getItem("reviewList");
      if (reviewList) {
        const ReviewListArr = JSON.parse(reviewList);
        ReviewListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem(
          "reviewList",
          JSON.stringify(ReviewListArr)
        );
      } else {
        window.localStorage.setItem(
          "reviewList",
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateReview: (state, action) => {
      const reviewList = window.localStorage.getItem("reviewList");
      if (reviewList) {
        const ReviewListArr = JSON.parse(reviewList);
        ReviewListArr.forEach((review) => {
          if (review.id === action.payload.id) {
            review.rate = action.payload.rate;
            review.content = action.payload.content;
            //수정하기
          }
        });
        window.localStorage.setItem(
          "reviewList",
          JSON.stringify(ReviewListArr)
        );
        state.reviewList = [...ReviewListArr];
      }
    },
    deleteReview: (state, action) => {
      const reviewList = window.localStorage.getItem("reviewList");
      if (reviewList) {
        const ReviewListArr = JSON.parse(reviewList);
        ReviewListArr.forEach((review, index) => {
          if (review.id === action.payload) {
            ReviewListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem(
          "reviewList",
          JSON.stringify(ReviewListArr)
        );
        state.reviewList = ReviewListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addReview, updateReview, deleteReview, updateFilterStatus } =
  review.actions;

export const store = configureStore({
  reducer: {
    review: review.reducer,
  },
});
