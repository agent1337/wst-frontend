import { grey } from "../../../colors";

export const styles = {
    uploadImage: {
        width: "100%",
        height: "400px",
        display: "block",
        textAlign: "center",
        marginBottom: "30px",
        position: 'relative'
    },
    uploadInput: {
        opacity: "0",
        position: "absolute",
        zIndex: "-1",
    },
    uploadLabelImage: {
        width: '363px',
        height: "inherit",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        background: "#C4C4C4",
    },
    uploadLabelFile: {
        width: "132px",
        height: "164px",
        border: `1px dashed ${grey}`,
        textTransform: "none",
        fontSize: "12px",
        fontWeight: 300,
        lineHeight: "14.06px",
        borderRadius: "4px",
        cursor: "pointer",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: '20px',
        position: 'relative'
    },
    text: {
        display: "block",
        width: "100%",
        color: "#000",
        textAlign: "center",
        margin: '0 30px'
    },
    image: {
        position: 'absolute',
        objectFit: "fill",
        width: 'inherit',
        height: 'inherit'
    },
    files: {
        display: 'flex', 
        flexWrap: 'wrap'
    },
    title: {
        marginTop: '20px', 
        marginBottom: '8px', 
        fontSize: '12px', 
        textTransform: 'uppercase'
    },
    subtitle: {
        color: '#9C9C9C', 
        marginBottom: '8px', 
        fontSize: '12px', 
        lineHeight: '14px',
    },
    fileIcon: {
        position: 'absolute', 
        bottom: '0', 
        right: '0', 
        width: '40px' 
    }
}