import { grey } from "../../../colors";

export const styles = {
  cardsItem: {
    position: "relative",
    display: "flex",
    padding: "0.50rem 0rem",
    marginBottom: "1rem",
    marginRight: "24px",
    "@media (max-width: 450px)": {
      margin: "0 auto",
    },
  },
  card: {
    position: "relative",
    width: "132px",
    height: "164px",
    backgroundColor: "#ffffff",
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  createButton: {
    border: `1px dashed ${grey}`,
    textAlign: "center",
    position: "relative",
    "@media (max-width: 34rem)": {
      margin: "0 auto",
    },
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
  image: {
    width: '40px',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
  }
};