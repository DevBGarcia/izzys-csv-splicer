import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const UploadSection = () => {

    const classes = useStyles()

    return(
        <div componentfile='UploadSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 1: UPLOAD CSV FILE
            </div>
            <div className={classes.componentContent}>
                *FILE INPUT COMPONENT*
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    componentContainer:{
        display:'flex',
        flexDirection: 'column',
        gap: 24
    },
    stepHeader: {
        fontSize: '2rem',
        marginLeft: '10%',
        color:'#00294B',
        fontWeight:700
    },
    componentContent:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
});

export default UploadSection;