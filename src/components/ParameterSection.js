import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const ParameterSection = () => {

    const classes = useStyles()

    return(
        <div componentfile='ParameterSection.js'>
            <div className={classes.stepHeader}>
                STEP 2: SELECT PARAMETERS
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    stepHeader: {
        fontSize: '2rem',
    },
});

export default ParameterSection;