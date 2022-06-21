export 
const styles = {
  container: {
    background: "#FCFCFC",
    padding: "20px 0",
    "@media (max-width: 1120px)": {
      padding: "12px 0",
      height: "75px",
    },
    "@media (max-width: 530px)": {
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
    "@media (max-width: 1120px)": {
      position: "absolute",
      top: "40px",
      width: "100%",
      textAlign: "center",
      fontSize: "12px",
    },
  },
  mobileFooter: {
    padding: "0 18px",
    background: "#FCFCFC",
    "@media (min-width: 531px)": {
      display: "none",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};