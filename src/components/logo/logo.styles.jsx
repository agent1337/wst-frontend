import { main } from '../../colors';

export const styles = {
    logo: {
        display: "flex",
        marginLeft: "-68px",
        alignItems: "center",
        "@media (max-width: 1330px)": {
            marginLeft: "0px",
        },
      },
    title: {
        marginLeft: "12px",
        paddingLeft: "12px",
        borderLeft: `2px solid ${main}`,
        color: `${main}`,
        fontSize: "28px",
        lineHeight: "33px",
        fontWeight: "500",
    }
}