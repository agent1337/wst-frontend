import { main, grey } from "../../colors"

export const styles = {
  container: {
    padding: '0 16px',
    maxWidth: '1160px',
    margin: '0 auto 40px auto',
  },
  box: {
    minHeight: '400px',
    display: "flex",
    flexWrap: "wrap",
    padding: '20px 40px',
    border: '1px solid #ccc',
    "@media (max-width: 381px)": {
      padding: '0 10px',
      justifyContent: 'space-between',
      border: 'none',
    },
    "@media (min-width:380px) and (max-width:500px)":  {
      padding: '0 24px',
      justifyContent: 'space-evenly',
      border: 'none',
      transition: 'transform 3s ease-in-out',
    },
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
    "@media (max-width: 500px)": {
      width: '45%',
    },
  }
};