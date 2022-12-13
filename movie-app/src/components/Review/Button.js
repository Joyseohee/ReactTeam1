import React from "react";
import styles from "./scss/Reviewbutton.module.scss";
import reviewInput from "./ReviewHeader";
import { Button } from "react-bootstrap";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

function Button_review({ type, variant = "primary", children, ...rest }) {
  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      return
      buttonTypes
      {...rest}
    >
      {children}
    </Button>
  );
}

// function SelectButton({
//   children,
//   id,
//   authorid,
//   authorNick,
//   movie_id,
//   rate,
//   content,
//   ...rest
// }) {
//   return (
//     <select
//       id={id}
//       authorid={authorid}
//       authorNick={authorid}
//       movie_id={authorid}
//       rate={rate}
//       content={content}
//       {...rest}
//     >
//       {children}
//     </select>
//   );
// }

// export { SelectButton };
export default Button_review;
