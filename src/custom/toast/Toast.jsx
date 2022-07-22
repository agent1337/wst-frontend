import React, { useEffect } from "react";
import { useToastActions } from "redux/toast/useToastActions";

import "./toast.styles.css";

export default function Toast({ toastlist }) {
  const { hideToast } = useToastActions();

  useEffect(() => {
    const interval = setTimeout(() => {
      if (toastlist.length) {
        hideToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearTimeout(interval);
    };
  }, [toastlist]);

  return (
    <div className="toastContainer">
      {toastlist.map((toast, i) => (
        <div key={i} className="notification">
          {toast.description}
        </div>
      ))}
    </div>
  );
}
