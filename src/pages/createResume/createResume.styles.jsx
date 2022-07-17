export const styles = {
    section: {
        width: "970px",
        margin: '0 auto',
        marginBottom: '100px',
        position: 'relative',
        "@media (max-width: 1024px)": {
            width: "96%",
            margin: '0 auto'
        },
    },
    block: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    },
    inputResumeTitle: {
        border: 'none'
    },
    container: {
        border: '1px solid #ccc',
        display: 'flex',
        "@media (max-width: 800px)": {
            flexDirection: 'column'
         },
    },
    selfIntroduction: {
        paddingTop: '13px',
        maxWidth: '334px',
        borderRight: '1px solid #ccc',
        "@media (max-width: 800px)": {
            maxWidth: '100%'
         },
    },
    fields: {
        width: '635px',
        "@media (max-width: 800px)": {
            maxWidth: '100%'
         },
    }
}