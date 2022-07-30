import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const ParameterSection = () => {

    const classes = useStyles()

    return(
        <div componentfile='ParameterSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 2: SELECT PARAMETERS
            </div>
            <div className={classes.componentContent}>
                <div>*Line Count Input*</div>
                <div>*Number of Files (Calculated Value)*</div>
                <div>*Column Header Checkbox*</div>
                <div>*Line Count Input*</div>
            </div>
            <div className={classes.applyButton}>*Apply Button*</div>
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
        marginLeft: '20%'
    },
    applyButton:{
        alignSelf:'center'
    }
});

export default ParameterSection;