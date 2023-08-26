/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, createContext, useEffect } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        dismissOldestToast();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toasts]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  function dismissOldestToast() {
    const [oldest, ...remainingToasts] = toasts;
    setToasts(remainingToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
