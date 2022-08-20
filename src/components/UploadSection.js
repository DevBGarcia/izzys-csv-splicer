import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { style } from "@mui/system";


const UploadSection = (props) => {

    const classes = useStyles()

    const {
        selectedFile = null, 
        handleInputFileChange
    } = props

    return (
        <div componentfile='UploadSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 1: UPLOAD CSV FILE
            </div>
            <div className={classes.componentContent}>
                <div className={classes.selectedFileRow}>
                    <div>File Name:</div>
                    <FormControl>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value={selectedFile?.name ?? ''}
                            disabled
                            helpertext={<div>Choose a CSV file to upload from your local computer</div>}
                            inputProps={{style:{height: 50, padding: 0, marginLeft:8, WebkitTextFillColor:'black'}}}
                        />
                        <FormHelperText><div>Choose a CSV file to upload from your local computer</div></FormHelperText>
                    </FormControl>
                    <Button
                        variant="contained"
                        component="label"
                        style={{height: 50, alignSelf:'flex-start'}}
                    >
                        Upload File
                        <input
                            type="file"
                            name="file"
                            id="file-upload"
                            onChange={e => handleInputFileChange(e) }
                            style={{ display: "none" }}
                        />
                    </Button>
                </div>
            </div>
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
    selectedFileRow: {
        display: 'flex',
        alignItems:'baseline',
        gap: 16
    }
});

export default UploadSection;