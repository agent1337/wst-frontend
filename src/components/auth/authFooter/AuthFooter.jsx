import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { styles } from "./authFooter.styles";

const AuthFooter = ({ type }) => {
  return (
    <>
      {type === "mobile" && (
        <Grid sx={styles.mobile}>
          {window.location.pathname === "/" ? (
            <Link to="/signin" className="link">
              <Typography sx={styles.redirectLink}>
                Already have account?{" "}
                <span style={styles.typeAuth}>Log In</span>
              </Typography>
            </Link>
          ) : (
            <Link to="/" className="link">
              <Typography sx={styles.redirectLink}>
                Don’t have an account?{" "}
                <span style={styles.typeAuth}>Sign Up</span>
              </Typography>
            </Link>
          )}
        </Grid>
      )}
      {type === "dekstop" && (
        <Grid sx={styles.dekstop}>
          {window.location.pathname === "/" ? (
            <Link to="/signin" className="link">
              <Typography sx={styles.redirectLink}>
                Already have account?{" "}
                <span style={styles.typeAuth}>Log In</span>
              </Typography>
            </Link>
          ) : (
            <Link to="/" className="link">
              <Typography sx={styles.redirectLink}>
                Don’t have an account?{" "}
                <span style={styles.typeAuth}>Sign Up</span>
              </Typography>
            </Link>
          )}
        </Grid>
      )}
    </>
  );
};

export default AuthFooter;
