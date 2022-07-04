import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import { styles } from './autoOutput.styles';

export default function AutoOtput({ item, handleRemoveItem, index }) {
    return (
        <span
            style={{ ...styles.block, padding: "8px", paddingRight: "40px" }}>
            {item.title}
            <button
                style={styles.removeButton}
                onClick={() => handleRemoveItem(index)}
            >
                <AddIcon sx={styles.removeIcon} />
            </button>
        </span>
    )
}
