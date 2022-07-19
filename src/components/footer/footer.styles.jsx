import { text } from "../../colors";

export const styles = {
  container: {
    background: "#FCFCFC",
    color: `${text}`,
    padding: "20px 0",
    "@media (max-width: 1120px)": {
      padding: "12px 0",
      height: "50px",
    },
    "@media (max-width: 899px)": {
      display: "none",
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    width: "90%",
    position: "relative",
  },
  copyright: {
    fontFamily: 'Arial',
    fontSize: '10px',
    "@media (max-width: 1120px)": {
      position: "absolute",
      top: "35px",
      width: "100%",
      textAlign: "center",
      fontSize: "10px",
    },
  },
  mobileFooter: {
    fontSize: '12px',
    padding: "0 18px",
    background: "#FCFCFC",
    // "@media (min-width: 531px)": {
    //   display: "none",
    // },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};