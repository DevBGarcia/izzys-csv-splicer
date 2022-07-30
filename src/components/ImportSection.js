import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const ImportSection = () => {

    const classes = useStyles()

    return(
        <div>
            <div className={classes.stepHeader}>
                STEP 1: UPLOAD CSV FILE
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    stepHeader: {
        fontSize: '2rem',
    },
});

export default ImportSection;