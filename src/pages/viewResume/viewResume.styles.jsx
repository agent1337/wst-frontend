export const styles = {
  section: {
    width: "970px",
    margin: '0 auto',
    marginBottom: '100px'
  },
  selfIntroduction: {
      maxWidth: '332px',
      width: '100%',
      borderRight: '1px solid #ccc'
  },
  introduction: {
    border: "1px solid #C4C4C4",
    padding: "20px",
    borderRight: "none",
    "@media (max-width: 900px)": {
      paddingBottom: "15px",
    },
    "@media (max-width: 700px)": {
      maxWidth: "100%",
      flexBasis: "100%",
      borderRight: "1px solid #C4C4C4",
      borderBottom: "0px",
    },
    "@media (max-width: 500px)": {
      border: "none",
      padding: "0px",
    },
  },
  fields: {
    border: "1px solid #C4C4C4",
    padding: "20px",
    "@media (max-width: 700px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
    "@media (max-width: 500px)": {
      border: "none",
      padding: "0px",
    },
  },
  title: {
    marginBottom: "12px",
  },
  text: {
    marginBottom: "18px",
  },
  output: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyItems: "start",
    border: "1px solid #29CC8F",
    borderRadius: "31px",
    height: "40px",
    marginRight: "10px",
    marginBottom: "22px",
    padding: "0 8px",
  },
  textarea: {
    border: "1px solid #29CC8F",
    borderRadius: "4px",
    resize: "none",
    width: "96%",
    minHeight: "50px",
    padding: "10px",
    lineHeight: "20px",
    marginBottom: "24px",
    background: "white",
  },
  files: {
    border: "1px solid #29CC8F",
    width: "132px",
    height: "164px",
    color: "#29CC8F",
    borderRadius: "4px",
    position: "relative",
  },
  uploadImage: {
    position: "absolute",
    bottom: "0",
    right: "0",
  },
  fileName: {
    fontFamily: "Roboto-Medium",
    fontSize: "12px",
    fontWeight: 500,
    wordBreak: "break-word",
    textAlign: "center",
    width: "85%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  box: {
    position: "relative",
    marginRight: "20px",
    marginBottom: "20px",
  },
};