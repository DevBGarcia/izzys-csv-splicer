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
    } = props

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <div componentfile='ParameterSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 2: SELECT PARAMETERS
            </div>
            <div className={classes.componentContent}>
                <div className={classes.selectedInputRow}>
                    <div>Number of Files:</div>
                    <TextField
                        id="outlined-number"
                        className={classes.inputClass}
                        type="number"
                        inputProps={{style:{height: 50, padding: 0, marginLeft:8, WebkitTextFillColor:'black'}}}
                        value={value}
                        onChange={handleChange}
                    />
                    <FormHelperText><div>Number of files to split into (minimum: 1)</div></FormHelperText>
                </div>
            </div>
            <Button
                variant="contained"
                component="label"
                style={{ height: 50, alignSelf: 'center' }}
                onClick={(e) => handleApplyButton(e, value)}
                disabled={selectedFile == null || !value || value < 1}
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