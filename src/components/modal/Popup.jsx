import React from 'react'
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "./ReactPortal";
import './popup.styles.css'

export default function Popup({ children, isOpen, handleClose }) {
    const nodeRef = useRef(null);
    useEffect(() => {
        const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);
    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <CSSTransition
                timeout={{ entry: 0, exit: 300 }}
                unmountOnExit
                classNames="modal"
                nodeRef={nodeRef}
                in={isOpen}
            >
                <div className="modal" ref={nodeRef}>
                    <div className="modal-content">{children}</div>
                </div>
            </CSSTransition>
        </ReactPortal>
    )
}
