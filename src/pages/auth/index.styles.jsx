export const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    container: {
      width: "100%",
      padding: 0,
      margin: 0,
      height: "92vh",
      position: "relative",
      "@media (max-width: 900px)": {
        height: "100vh",
      },
    },
    image: {
      position: "absolute",
      right: "0px",
      zIndex: 9999,
    },
  };
  