import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const TitleSection = () => {

    const classes = useStyles()

    return(
        <div componentfile='TitleSection.js'>
            <div className={classes.stepHeader}>
                CSV SPLITTER
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    stepHeader: {
        fontSize: '2rem',
    },
});

export default TitleSection;