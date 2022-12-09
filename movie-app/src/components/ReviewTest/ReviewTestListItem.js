import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./ReviewTestListItem.scss";

const ReviewTestListItem = ({ todo }) => {
  const { userid, text, content, Date } = todo;
  return (
    <div className="ReviewTestListItem">
      <div className="text">{userid} : </div>
      <div className="text">{text}</div>
      <div className="text">{content}</div>
      <div className="text">{Date}</div>
    </div>
  );
};

export default ReviewTestListItem;
