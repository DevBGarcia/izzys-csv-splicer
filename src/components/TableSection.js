import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const TableSection = () => {

    const classes = useStyles()

    return (
        <div>
            <div className={classes.stepHeader}>
                STEP 3: PREVIEW
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    stepHeader: {
        fontSize: '2rem',
    },
});

export default TableSection;