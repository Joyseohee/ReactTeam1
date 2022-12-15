import React from "react";
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

export default Button_review;
