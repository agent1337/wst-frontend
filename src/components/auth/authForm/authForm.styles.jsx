export const styles = {
    flexbox: {
      display: "flex",
    },
    authform: {
      position: "relative",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0px 40px",
      "@media (max-width: 1100px)": {
        padding: "0px 20px",
      },
      "@media (max-width: 940px)": {
        padding: "0px 10px",
      },
      "@media (max-width: 911px)": {
        padding: "0px 10px",
      },
      "@media (max-width: 500px)": {
        padding: "0px 35px",
        width: "100%",
        display: "block",
      },
    },
    authButton: {
      marginTop: "25px",
      width: "100%",
      height: "40px",
      borderRadius: "4px",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "16px",
      padding: "11px 0",
      letterSpacing: "1px",
      textTransform: "inherit",
      color: "#fff",
      background: "#29CC8F",
      "@media (max-width: 700px)": {
        fontSize: "18px",
      },
      "@media (max-width: 530px)": {
        fontSize: "14px",
        padding: "9px 0",
      },
    },
    fieldGrid: {
      margin: "0 auto",
      width: "90%",
      maxWidth: "460px",
      "@media (max-width: 911px)": {
        width: "80%",
        marginTop: "50px",
      },
      "@media (max-width: 700px)": {
        width: "90%",
        marginTop: "50px",
      },
      "@media (max-width: 500px)": {
        minWidth: "100%",
      },
    },
    content: {
      marginTop: "25px",
      "@media(max-width: 530px)": {
        marginTop: "10px",
      },
    },
    button: {
      width: "100%",
      height: "40px",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "16px",
      padding: "11px 0",
      letterSpacing: "1px",
      color: "#fff",
      "@media (max-width: 700px)": {
        fontSize: "18px",
      },
      "@media (max-width: 530px)": {
        fontSize: "14px",
        padding: "9px 0",
      },
    },

    login: {
      background: "#29CC8F",
      "&:hover": {
        background: "#29CC8F",
      },
    },
    twitButton: {
      background: "#5B9BE2",
      marginTop: '28px',
      "&:hover": {
        background: "#5B9BE2",
      },
      "@media (max-width: 700px)": {
        marginTop: "13px",
      },
    },
    lineButton: {
      marginTop: '28px',
      background: "#00B900",
    },
    policyDisagree: {
      color: "#F68C8D",
      textTransform: "inherit",
      "&:hover": {
        background: "none",
      },
    },
    policyAgree: {
      background: "#29CC8F",
      color: "#fff",
      textTransform: "inherit",
      width: "140px",
      height: "40px",
      "&:hover": {
        background: "#29c68b",
      },
    },
    iframe: {
      height: "85%",
      width: "100%",
      border: "1px solid #EAEAEA",
    },
    forgotPassword: {
      fontWeight: 400,
      letterSpacing: "0.05em",
      color: "#2acc8f",
      display: "block",
      textAlign: "end",
      marginTop: "-6px",
      marginBottom: "2px",
      fontSize: "9px",
    },
  };
  