import { main, white } from '../../colors';

export const styles = {
    dekstop: {
        display: "flex",
        "@media (max-width: 799px)": {
            display: 'none'
        },
    },
    mobile: {
        position: 'relative',
        "@media (min-width: 800px)": {
            display: 'none'
        },
    },
    combineButton: {
        display: 'flex',
        width: '60px',
        height: '34px',
        border: `1px solid ${main}`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotIcon: {
        width: '4px',
        color: `${main}`,
    },
    blockMenu: {
        background: `${white}`,
        width: '150px',
        position: 'absolute',
        right: '0',
        padding: '5px 0',
        zIndex: 3,
        boxShadow: "0px 3px 4px rgb(42 204 143 / 27%)",
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
    },
    menuButton: {
        padding: '10px',
        width: '100%',
        textAlign: 'left'
    }
}