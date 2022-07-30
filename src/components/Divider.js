import React from "react";
import { makeStyles } from '@mui/styles';

const Divider = () => {

    const classes = useStyles()

    return(
        <div componentfile='Divider.js' className={classes.divider}/>
    )
}

const useStyles = makeStyles({
    divider: {
        borderBottom: '1px solid #696969',
        backgroundColor: '#696969',
        marginTop: '1px'
    }
});

export default Divider;