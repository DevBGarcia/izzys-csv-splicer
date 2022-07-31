import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

import Button from '@mui/material/Button';

const ParameterSection = (props) => {

    const classes = useStyles()

    const {
        selectedFile,
        handleApplyButton
    } = props

    return(
        <div componentfile='ParameterSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 2: SELECT PARAMETERS
            </div>
            <div className={classes.componentContent}>
                <div>*Input Parameters*</div>
            </div>
            <Button
                variant="contained"
                component="label"
                style={{height: 50, alignSelf:'center'}}
                onClick={(e) => handleApplyButton(e)}
                disabled={selectedFile == null}
            >
                Apply Parameters
            </Button>
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
    }
});

export default ParameterSection;