/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { ToastContext } from "./ToastProvider";
import ToastShelf from "./ToastShelf";
import styles from "./Toast.module.css";

function Toast({ message, variant }) {
  const { createToast } = useContext(ToastContext);

  useEffect(() => {
    createToast(message, variant);
  }, [message, variant]);

  return (
    <div className={styles.wrapper}>
      <ToastShelf />
    </div>
  );
}

export default Toast;
