import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const TitleSection = () => {

    const classes = useStyles()

    return(
        <div componentfile='TitleSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                CSV SPLITTER
            </div>
            <div style={{lineHeight: 2, textAlign:'center'}}>
                Split your comma-separated values (.csv) files into smaller files with just 3 easy steps.
                <br/>
                No installation needed!
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    componentContainer:{
        display:'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems:'center'
    },
    stepHeader: {
        fontSize: '3rem',
        color:'#00294B',
        fontWeight:700
    },
});

export default TitleSection;