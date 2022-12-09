import "./ReviewTestTemplate.scss";

const ReviewTestTemplate = ({ children }) => {
  return (
    <div className="ReviewTestTemplate">
      <div className="ReviewTest-title">리뷰 및 평점</div>
      <div className="ReviewTest-content">{children}</div>
    </div>
  );
};

export default ReviewTestTemplate;
