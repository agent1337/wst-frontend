import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { hideToast } from '../../redux/alert/alert.actions';
import './toast.styles.css'

export default function Toast({ toastlist, }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setTimeout(() => {
            if (toastlist.length) {
                dispatch(hideToast(toastlist[0].id))
            }
        }, 3000);

        return () => {
            clearTimeout(interval);
        }
    }, [toastlist]);

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
