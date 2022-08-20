import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';

const ParameterSection = (props) => {

    const classes = useStyles()

    const {
        selectedFile,
        handleApplyButton,
        fileSplitCount,
        setFileSplitCount,
    } = props

    return (
        <div componentfile='ParameterSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 2: SELECT PARAMETERS
            </div>
            <div className={classes.componentContent}>
                <div className={classes.selectedInputRow}>
                    <div>File Count:</div>
                    <TextField
                        id="outlined-number"
                        className={classes.inputClass}
                        type="number"
                        inputProps={{style:{height: 50, padding: 0, marginLeft:8, WebkitTextFillColor:'black'}}}
                        value={fileSplitCount}
                        onChange={(event)=>{setFileSplitCount(event.target.value)}}
                    />
                    <FormHelperText><div>Number of lines per file</div></FormHelperText>
                </div>
            </div>
            <Button
                variant="contained"
                component="label"
                style={{ height: 50, alignSelf: 'center' }}
                onClick={(e) => handleApplyButton(e)}
                disabled={selectedFile == null || !fileSplitCount || fileSplitCount == 0}
            >
                Apply Parameters
            </Button>
        </div>
    )
}

const useStyles = makeStyles({
    componentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24
    },
    stepHeader: {
        fontSize: '2rem',
        marginLeft: '10%',
        color: '#00294B',
        fontWeight: 700
    },
    componentContent: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20%'
    },
    selectedInputRow: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 16
    },
    inputClass: {
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    }
});

export default ParameterSection;