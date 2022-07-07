import { grey } from '../../colors'

export const styles = {
  container: {
    width: "100%",
    // "@media (max-width: 1100px)": {
    //   display: "none",
    // },
  },
  block: {
    width: "100%",
    borderBottom: "1px solid #D6D6D6",
  },
  times: {
    display: "flex",
    justifyContent: "end",
    width: "80%",
    padding: "0px 15px",
    marginLeft: "auto",
  },
  time: {
    width: "100%",
    fontSize: "14px",
  },
  schedule: {
    display: "flex",
    width: "100%",
    padding: "0px 10px 0px 10px",
    borderBottom: "1px solid #D6D6D6",
    height: "40px",
  },
  hoursBlock: {
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: "21px",
  },
  hourItem: {
    width: "100%",
    borderRadius: "1px",
    position: "relative",
    padding: '5px 0',
    borderLeft: `1px solid ${grey}`,
    
  },
  mobileView: {
    display: "flex",
    width: "100%",
    // "@media (min-width: 1100px)": {
    //   display: "none",
    // },
  },
  mobileTimes: {
    width: "10%",
    textAlign: "center",
    marginTop: "35px",
  },
  schedulesContent: {
    display: "flex",
    width: "90%",
    justifyContent: "space-evenly",
  },
  mobileSchedule: {
    borderRight: "1px solid #D6D6D6",
    width: "20%",
    padding: "0 5px",
    textAlign: "center",
    "&:first-child": {
      borderLeft: "1px solid #D6D6D6",
    },
  },
  hourItemMob: {
    padding: "2.3px 0",
    borderRadius: "1px",
  },

  fieldTitle: {
    textTransform: "uppercase",
    color: "#323232",
    lineHeight: "16px",
    margin: "22px 0 9px 0",
  },
};
