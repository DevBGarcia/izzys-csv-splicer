import React from "react";
import { makeStyles } from '@mui/styles';

const Header = () => {

    const classes = useStyles()

    return(
        <div componentfile='Header.js' className={classes.headerSection}> 
            <div className={classes.headerTitleText}> CSV SPLITTER </div>
        </div>
    )
}

const useStyles = makeStyles({
    headerSection: {
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 100,
        height: 60,
        backgroundColor: '#00294B',
        display:'flex',
        alignItems:'center'
    },
    headerTitleText: {
        fontSize: '2rem',
        color:'#FFFFFF',
        marginLeft:'10%'
    }

});

export default Header;