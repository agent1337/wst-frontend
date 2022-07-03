import React from 'react'
import { styles } from './actionButton.styles'

export default function ActionButton({ text, func, src }) {
    return (
        <button
            type="button"
            
            onClick={() => func()}
            style={styles.button}
        >
            {src && (
                <img
                    src={src}
                    alt="icon"
                    style={styles.icon}
                />
            )}

            {text}
        </button>
    )
}
