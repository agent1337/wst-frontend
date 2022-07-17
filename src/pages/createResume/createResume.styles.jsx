import { main, dark_warning, white } from "../../colors";

export const styles = {
    section: {
        maxWidth: '970px',
        margin: '0 auto',
        "@media (max-width: 970px)": {
            maxWidth: 'auto',
            padding: '0 20px'
        },
        "@media (max-width: 800px)": {
            padding: '0'
        }
    },
    block: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        marginBottom: '10px',
    },
    container: {
        display: 'flex',
        border: '1px solid #ccc',
        "@media (max-width: 800px)": {
            flexDirection: 'column',
            border: 'none'
        },
    },
    selfIntroduction: {
        "@media (min-width: 801px)": {
            paddingTop: '13px',
            maxWidth: '300px',
            width: '100%',
            borderRight: '1px solid #ccc',
            padding: '0 16px'
        },
    },
    fields: {
        width: '100%',
    },
    titleInput: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    inputResumeTitle: {
        width: '150px',
        border: 'none',
        fontWeight: '400',
        fontSize: '19px',
        outline: 'none'
    },
    mobileAction: {
        display: 'none',
        "@media (max-width: 800px)": {
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '220px'
        },
    },
    btn: {
        width: 'calc(100% - 32px)',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '16px',
        padding: '10px 0',
        margin: '10px auto'
    },
    save: {
        color: `${white}`,
        background: `${main}`,
        marginBottom: '20px',
    },
    publish: {
        color: `${main}`,
        border: `1px solid ${main}`,
    },
    goTop: {
        position: 'absolute',
        bottom: '30px',
        right: '16px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: `${dark_warning}`
    }
}