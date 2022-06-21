import { Grid, Typography, Checkbox } from "@mui/material";
import { styles } from "./authCheckbox.styles";

const AuthCheckbox = ({ isRememberMe, setIsRememberMe }) => {
  return (
    <Grid sx={styles.box}>
      <Checkbox
        checked={isRememberMe}
        onChange={(e) => setIsRememberMe(e.target.checked)}
        sx={styles.checkbox}
      />
      <Typography sx={styles.label}>Remember me</Typography>
    </Grid>
  );
};



export default AuthCheckbox;
