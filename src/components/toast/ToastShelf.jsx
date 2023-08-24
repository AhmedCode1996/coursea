import { useContext } from "react";
import { ToastContext } from "./ToastProvider";
import styles from "./ToastShelf.module.css";
import Toastify from "./Toastify";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts?.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toastify id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toastify>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
