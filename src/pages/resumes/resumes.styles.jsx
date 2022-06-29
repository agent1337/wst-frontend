import { main, grey} from "../../colors"

export const styles = {
    root: {
      width: "100%",
    },
    container: {
      maxWidth: '1160px',
      margin: '0 auto 40px auto',
    },
    box: {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      margin: "0 auto",
      padding: "20px 0px 20px 32px",
      border: '1px solid #ccc',
      minHeight: '450px'
    },
    tab: {
      color: `${grey}`,
      textTransform: "inherit",
      padding: '0px',
      marginRight: '20px',
      "&.Mui-selected": {
        color: `${main}`,
        textTransform: "inherit",
        fontWeight: '400',
      },
    }
  };