import { main } from '../../colors';

export const styles = {
    header: {
        width: "100%",
        marginBottom: "46px",
        position: "relative",
        "@media (min-width: 799px)": {
            height: '120px',
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 3px 4px rgb(42 204 143 / 27%)",
        },
    },
    mobile: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: "0px 3px 4px rgb(42 204 143 / 27%)",
        "@media (min-width: 950px)": {
            display: "none",
        },
    },
    content: {
        maxWidth: "1160px",
        width: '100%',
        margin: "0 auto",
        height: "120px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        "@media (max-width: 1180px)": {
            maxWidth: '100%',
            padding: '0 20px'
        },
        "@media (max-width: 949px)": {
            display: "none",
        },
    },
    box: {
        display: "flex",
        flexDirection: "column",
    },
    createButton: {
        background: `${main}`,
        color: "#fff",
        borderRadius: "20px",
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "18px",
        textTransform: "capitalize",
        padding: "10px 27px",
        marginTop: "20px",
        "&:hover": {
            background: `${main}`,
        },
    },
    burgerMenu: {
        color: `${main}`,
        width: '28px',
        height: '28px',
        cursor: 'pointer'
    }
}