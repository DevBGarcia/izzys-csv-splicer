import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const TableSection = () => {

    const classes = useStyles()

    return (
        <div componentfile='TableSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 3: PREVIEW & DOWNLOAD
            </div>
            <div className={classes.componentContent}>
                <div>*TABLE COMPONENT*</div>
            </div>
            <div className={classes.applyButton}>*Download Button*</div>
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
    },
    applyButton:{
        alignSelf:'center'
    }
});

export default TableSection;