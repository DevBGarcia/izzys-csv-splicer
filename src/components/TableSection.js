import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import TableFilePreview from "./TableFilePreview";
import { TabPanel, A11yProps } from "./TabPanelFunctionalComponents";

const TableSection = (props) => {

    const classes = useStyles()

    const {
        parsedInputFileHeaders,
        parsedInputFileRows,
        fileSplitCount,
        parsedInputFileLineCount
    } = props

    const [tabValue, setTabValue] = useState(0)

    const handleChangeTabValue = (event, newValue) => {
        setTabValue(newValue)
    }

    /* Split File Tables State Values and functions */

    const getSplitFiles = () => {

    }

    const [splitFiles, setSplitFiles] = useState([])
    const [splitFilesLineCount, setSplitFilesLineCount] = useState(null)
    const [splitFileCountRemainder, setSplitFileLineCountRemainder] = useState(null)

    useEffect(()=> {
        if(parsedInputFileLineCount && fileSplitCount && parsedInputFileRows){
            
            let splitFileRemainder = null;
            let linesPerFile = Math.ceil(parsedInputFileLineCount/fileSplitCount)
            if( parsedInputFileLineCount%fileSplitCount !=0 ){
                splitFileRemainder = Math.floor(parsedInputFileLineCount/fileSplitCount)
            }
            
            let tmpSplitFileArray = []
            for (let i = 0; i < parsedInputFileRows.length; i += linesPerFile) {
                const split = parsedInputFileRows.slice(i, i + linesPerFile);
                tmpSplitFileArray.push(split)
            }
           
            setSplitFiles(tmpSplitFileArray)
            setSplitFilesLineCount(linesPerFile)
            setSplitFileLineCountRemainder(splitFileRemainder)

        }
    },[parsedInputFileLineCount, fileSplitCount, parsedInputFileRows])

    useEffect(()=>{
        if(splitFiles && splitFilesLineCount && splitFileCountRemainder){
            console.log('BG - split file data debug - splitFiles, splitFilesLineCount, splitFileCountRemainder: ', splitFiles, splitFilesLineCount, splitFileCountRemainder)
        }
    }, [splitFiles, splitFilesLineCount, splitFileCountRemainder])

    /* ------------------------------ */

    return (
        <div componentfile='TableSection.js' className={classes.componentContainer}>
            <div className={classes.stepHeader}>
                STEP 3: PREVIEW & DOWNLOAD
            </div>
            <div className={classes.componentContent}>
                {/* <div className={classes.componentContentToolBar}>
                </div> - TODO, add toolbar */}
                <Tabs style={{width:'100%'}} className={classes.targetFlexContainer} value={tabValue} onChange={handleChangeTabValue} aria-label="basic tabs example">
                    <Tab style={{border:'1px solid rgba(224, 224, 224, 1)'}} label="Uploaded CSV File" {...A11yProps(0)} />
                    <Tab style={{border:'1px solid rgba(224, 224, 224, 1)'}} label="Split Files" {...A11yProps(1)} />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    <TableFilePreview
                        parsedInputFileHeaders={parsedInputFileHeaders}
                        parsedInputFileRows={parsedInputFileRows}
                    />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <div>Page 2</div>
                </TabPanel>
                <div className={classes.componentContentStats}>
                    <div>
                        Number of files: <span className={classes.componentContentStatsValue}>{fileSplitCount && parsedInputFileRows ? fileSplitCount : 'N/A'}</span>
                    </div>
                    <div>
                        Total lines: <span className={classes.componentContentStatsValue}> {parsedInputFileLineCount && parsedInputFileRows ? parsedInputFileLineCount : 'N/A'} </span>
                    </div>
                    <div>
                        Lines per files: <span className={classes.componentContentStatsValue}> {splitFilesLineCount && parsedInputFileRows ? <span> {splitFilesLineCount} {splitFileCountRemainder && <span>({splitFileCountRemainder} Remainder)</span>  }</span> : 'N/A'} </span>
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
    },
    targetFlexContainer: {
        '& .MuiTabs-flexContainer':{
            gap: 32
        }
    }
});

export default TableSection;