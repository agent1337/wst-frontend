import { white, } from '../../colors';

export const styles = {
    navigation: {
        display: "flex",
    },
    mobile: {
        display: 'none',
        "@media (max-width: 949px)": {
            display: 'block',
            position: 'absolute',
            background: `${white}`,
            width: 'calc(100% - 100px)',
            zIndex: 4,
            boxShadow: '0px 0px 8px  rgba(0, 0, 0, 0.16)',
            borderRadius: '2px',
            padding: '20px 50px',
        },
    },
    dekstop: {
        display: "flex",
        "@media (max-width: 1330px)": {
            marginLeft: "60px",
        },
        "@media (max-width: 949px)": {
            display: 'none',
        }
    }
}