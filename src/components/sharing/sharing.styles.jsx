import { dark_grey } from "../../colors";

export const styles = {
    container: {
        width: '343px',
        padding: '32px'
    },
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '32px',
    },
    copyContainer: {
        background: `${dark_grey}`,
        width: '62px',
        height: '62px',
        borderRadius: '50%',
        position: 'relative'
    },
    copyInner: {
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
        justifyContent: 'center',
        alignItems: 'center'
    },
    social: {
        cursor: 'pointer',
    },
    caption: {
        fontSize: '12px',
        display: 'block',
        textAlign: 'center'
    },
    buttonBlock: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        color: `${dark_grey}`,
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '16px',
    }
}