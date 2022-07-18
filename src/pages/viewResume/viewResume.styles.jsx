import { dark_warning, grey } from "../../colors";

export const styles = {
  section: {
    maxWidth: '970px',
    margin: '0 auto',
    "@media (max-width: 970px)": {
      maxWidth: 'auto',
      padding: '0 20px'
    },
    "@media (max-width: 800px)": {
      padding: '0'
    }
  },
  block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "15px",
  },
  imageBox: {
    position: 'relative',
    width: "100%",
    height: "400px",
    background: `${grey}`,
    marginBottom: "30px",
    "@media (min-width: 800px)": {
      marginTop: '13px'
    },
  },
  infoBlock: {
    width: 'calc(100% - 80px)',
    position: 'absolute',
    bottom: '0px',
    background: 'rgba(0, 0, 0, 0.5)',
    "@media (min-width: 800px)": {
     display: 'none'
    },
  },
  container: {
    display: 'flex',
    position: 'relative',
    border: '1px solid #ccc',
    "@media (max-width: 800px)": {
      flexDirection: 'column',
      border: 'none'
    },
  },
  selfIntroduction: {
    "@media (min-width: 801px)": {
      paddingTop: '13px',
      maxWidth: '300px',
      width: '100%',
      borderRight: '1px solid #ccc',
      padding: '0 16px'
    },
  },
  fields: {
    width: 'calc(100% - 16px)',
    padding: '0 16px'
  },
  qrBox: {
    width: "150px",
    height: "150px",
    display: "block",
    margin: "62px auto",
    "@media (max-width: 800px)": {
      position: 'absolute',
      top: '16px',
      right: '16px',
      width: '30px',
      height: '30px',
      margin: '0',
     },
  },
  qrCode: {
    width: "100%",
    height: "100%",
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
  goTop: {
    position: 'absolute',
    bottom: '30px',
    right: '16px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: `${dark_warning}`
  }
};