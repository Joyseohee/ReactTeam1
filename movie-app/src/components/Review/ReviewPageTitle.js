import React from "react";
import styles from "./scss/Reviewtitle.module.scss";

function ReviewPageTitle({ children, ...rest }) {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
}

export default ReviewPageTitle;
