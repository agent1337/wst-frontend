export const styles = {
  mobile: {
    width: "100%",
    position: "relative",
    background: "#FCFCFC",
    boxShadow: "0px -1px 10px 2px rgba(0, 0, 0, 0.1)",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "50px",
    "@media(min-width: 899px)": {
      display: "none",
    },
  },
  dekstop: {
    "@media(max-width: 901px)": {
      display: "none",
    },
    marginTop: "30px",
  },
  redirectLink: {
    textAlign: "center",
    color: "#000",
  },
  typeAuth: {
    color: "#29CC8F",
    paddingLeft: "6px",
    cursor: "pointer",
  },
};
