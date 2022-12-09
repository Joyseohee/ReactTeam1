import ReviewTestListItem from "./ReviewTestListItem";
import "./ReviewTestList.scss";

const ReviewTestList = ({ todos }) => {
  return (
    <div className="ReviewTestList">
      {todos.map((todo) => (
        <ReviewTestListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ReviewTestList;
