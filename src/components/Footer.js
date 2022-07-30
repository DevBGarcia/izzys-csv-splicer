import React from "react";
import { makeStyles } from '@mui/styles';

const Footer = () => {

    const classes = useStyles()

    return(
        <div componentfile='Footer.js' className={classes.footer}/>
    )
}

const useStyles = makeStyles({
    footer: {
        position: 'sticky',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        height: 60,
        backgroundColor: '#00294B'
    }
});

export default Footer;