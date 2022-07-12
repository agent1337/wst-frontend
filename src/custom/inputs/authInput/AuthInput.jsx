import { Box } from "@mui/material"
import { danger, grey } from "../../../colors";
import { styles } from "./authInput.styles";

const AuthInput = ({ value, name, placeholder, type, onChange, errors, minLength }) => {
    console.log(errors)
    return (
        <Box sx={{width: '100%'}}>
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                minLength={minLength || null}
                style={errors[name] ? {...styles.input, border: `1px solid ${danger}`} : {...styles.input, border: `1px solid ${grey}`}}
            />
        </Box>

    )
}

export default AuthInput;