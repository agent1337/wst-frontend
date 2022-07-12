import { dark_grey } from "../../../colors";

export const styles = {
    title: {
        marginTop: "12px",
        marginBottom: "7px",
        fontSize: '12px',
        textTransform: 'uppercase'
    },
    textField: {
        border: `1px solid ${dark_grey}`,
        borderRadius: "31px",
        minWidth: "92px",
        maxWidth: "100%",
        height: "40px",
        paddingLeft: "10px",
        outlineColor: "#29CC8F",
        marginRight: "10px",
        marginBottom: "24px",
    },

    block: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyItems: "start",
        border: "1px solid #29CC8F",
        borderRadius: "31px",
        height: "27px",
        marginRight: "10px",
        padding: "12px 28px 13px 8px",
      },
      removeButton: {
        fontSize: "18px",
        position: "absolute",
        right: "6px",
        top: "8px",
        border: "none",
        borderLeft: "1px solid #29CC8F",
        height: "25px",
      },
      removeIcon: {
        transform: "rotate(45deg)",
        color: `${dark_grey}`,
      },
}
