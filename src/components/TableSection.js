import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import TableFullFilePreview from "./TableFullFilePreview";

const TableSection = (props) => {

    const classes = useStyles()

    const {
        parsedInputFileHeaders,
        parsedInputFileRows
    } = props

    return (
        <div componentfile='TableSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 3: PREVIEW & DOWNLOAD
            </div>
            <div className={classes.componentContent}>
                {/* <div className={classes.componentContentToolBar}>
                </div> - TODO, add toolbar */}
                <TableFullFilePreview
                    parsedInputFileHeaders={parsedInputFileHeaders}
                    parsedInputFileRows={parsedInputFileRows}
                />
                <div className={classes.componentContentStats}>
                    <div>
                        Number of files: <span className={classes.componentContentStatsValue}> 1</span>
                    </div>
                    <div>
                        Lines per files: <span className={classes.componentContentStatsValue}> 0000 </span>
                    </div>
                    <div>
                        Total lines: <span className={classes.componentContentStatsValue}> 0000 </span>
                    </div>
                </div>
            </div>
            <div className={classes.applyButton}>*Download Button*</div>
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
        alignItems: 'center',
    },
    componentContentStats: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        gap: 150,
        height: 56,
        border: '1px solid rgba(224, 224, 224, 1)',
        backgroundColor: '#D9D9D9',
        width: '100%'
    },
    componentContentToolBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        gap: 150,
        height: 96,
        border: '1px solid rgba(224, 224, 224, 1)',
        backgroundColor: '#FFFFFF',
        width: '100%'
    },
    componentContentStatsValue: {
        fontWeight: 'bold'
    },
    applyButton: {
        alignSelf: 'center'
    }
});

export default TableSection;