export const styles = {
  cardsItem: {
    position: "relative",
    display: "flex",
    padding: "0.50rem 0rem",
    marginBottom: "1rem",
    marginRight: "24px",
    height: "164px",
    "@media (max-width: 450px)": {
      margin: "0 auto",
    },
  },
  card: {
    position: "relative",
    width: "132px",
    height: "137px",
    backgroundColor: "#ffffff",
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: "space-between",
    paddingTop: "28px",
    border: "1px solid #29CC8F",
    cursor: 'pointer'
  },
  status: {
    position: "absolute",
    left: "0px",
    top: "6px",
    background: "#29CC8F",
    color: "#fff",
    fontSize: "9px",
    fontWeight: "700",
    padding: "3px 7px",
    textTransform: "uppercase",
    borderRadius: "0px 2px 2px 0px",
  },
  deleteButton: {
    cursor: "pointer",
    position: "absolute",
    right: "15px",
    top: "16px",
    zIndex: "100",
    width: "12px",
    height: "16px",
    color: "#F68C8D",
  },
  detail: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end'
  },
  resumeTitle: {
    fontSize: "14px",
    padding: "0 15px",
    fontWeight: "400",
    lineHeight: '14px'
  },
  actionBox: {
    padding: '8px 0',
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  text: {
    fontSize: "9px",
    marginRight: "6px",
  },
}