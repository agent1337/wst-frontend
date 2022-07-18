import React, { useCallback, useEffect } from 'react'
import './toast.styles.css'

export default function Toast({ toastlist, setList }) {
    const deleteToast = useCallback(id => {
        const toastListItem = toastlist.filter(e => e.id !== id);
        setList(toastListItem);
    }, [toastlist, setList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastlist.length) {
                deleteToast(toastlist[0].id);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [toastlist, deleteToast]);

    return (
        <div className="toastContainer">
            {
                toastlist.map((toast, i) => (
                    <div
                        key={i}
                        className="notification"
                    >
                       {toast.description}
                    </div>
                ))
            }
        </div>
    )
}
