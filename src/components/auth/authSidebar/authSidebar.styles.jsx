import { main } from '../../../colors'

export const styles = {
  section: {
    background: `${main}`,
    color: "#ffffff",
    padding: "0px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      background: "transparent",
    },
  },
  flexbox: {
    display: "flex",
  },
  logo: {
    color: '#fff',
    width: "inherit",
    height: "auto",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  block: {
    height: "24%",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  text: {
    marginTop: "13px",
    marginLeft: "10px",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#fff",
    "@media (max-width: 900px)": {
      color: `${main}`,
      fontSize: "16px",
    },
  },
  title: {
    fontWeight: 500,
    fontSize: "40px",
    lineHeight: "47px",
    marginTop: "50px",
    marginBottom: "20px",
    letterSpacing: "1px",
    textTransform: "inherit",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "@media (max-width: 900px)": {
      marginTop: "25px",
      marginBottom: "19px",
      fontSize: "32px",
    },
  },
  mobileTitle: {
    fontSize: "16px",
    color: "#29CC8F",
  },
  subtitle: {
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "18px",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  image: {
    width: "90%",
    minHeight: "38%",
    marginTop: "20px",
    "@media (max-width: 1110px)": {
      width: "95%",
    },
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  box: {
    minHeight: "20%",
    display: "flex",
    alignItems: "center",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    "@media (max-width: 900px)": {
      filter: "none",
      marginTop: "36px",
    },
  },
  desktop: {
    width: "57px",
    height: "33px",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  mobile: {
    "@media (min-width: 900px)": {
      display: "none",
    },
  },
}; 