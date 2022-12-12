import React from "react";
import styles from "./scss/Reviewbutton.module.scss";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

function Button({ type, variant = "primary", children, ...rest }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      // className={getClasses([
      //   styles.button,
      //   styles[`button--${buttonTypes[variant]}`],
      // ])}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({
  children,
  id,
  authorid,
  authorNick,
  movie_id,
  rate,
  content,
  ...rest
}) {
  return (
    <select
      id={id}
      authorid={authorid}
      authorNick={authorid}
      movie_id={authorid}
      rate={rate}
      content={content}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
