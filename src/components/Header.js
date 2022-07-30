import React from "react";
import { makeStyles } from '@mui/styles';

const Header = () => {

    const classes = useStyles()

    return(
        <div className={classes.header}/>
    )
}

const useStyles = makeStyles({
    header: {
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 100,
        height: 60,
        backgroundColor: '#00294B'
    }
});

export default Header;