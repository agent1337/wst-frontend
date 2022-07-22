import { Link } from "react-router-dom";
import { routes } from "routing/Routes";

import { Grid, Typography } from "@mui/material";
import { styles } from "./authFooter.styles";

const AuthFooter = ({ type }) => {
  return (
    <>
      {type === "mobile" && (
        <Grid sx={styles.mobile}>
          {window.location.pathname === "/" ? (
            <Typography sx={styles.redirectLink}>
              Already have account?{" "}
              <Link to={routes().signin} className="link">
                <span style={styles.typeAuth}>Log In</span>
              </Link>
            </Typography>
          ) : (
            <Typography sx={styles.redirectLink}>
              Don’t have an account?{" "}
              <Link to={routes().signup} className="link">
                <span style={styles.typeAuth}>Sign Up</span>
              </Link>
            </Typography>
          )}
        </Grid>
      )}
      {type === "dekstop" && (
        <Grid sx={styles.dekstop}>
          {window.location.pathname === "/" ? (
            <Typography sx={styles.redirectLink}>
              Already have account?{" "}
              <Link to={routes().signin} className="link">
                <span style={styles.typeAuth}>Log In</span>
              </Link>
            </Typography>
          ) : (
            <Typography sx={styles.redirectLink}>
              Don’t have an account?{" "}
              <Link to={routes().signup} className="link">
                <span style={styles.typeAuth}>Sign Up</span>
              </Link>
            </Typography>
          )}
        </Grid>
      )}
    </>
  );
};

export default AuthFooter;
