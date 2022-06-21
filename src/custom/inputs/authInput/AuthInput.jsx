import { Box } from "@mui/material"
import { styles } from "./authInput.styles";

const AuthInput = ({ value, name, placeholder, type, onChange }) => {
    return (
        <Box sx={{width: '100%'}}>
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                style={styles.input}
            />
        </Box>

    )
}

export default AuthInput;