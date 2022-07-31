import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';

/* Created Components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

import TitleSection from "../components/TitleSection";
import UploadSection from "../components/UploadSection";
import ParameterSection from "../components/ParameterSection";
import TableSection from "../components/TableSection";

/* MUI  */
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const MainScreen = () => {

    const classes = useStyles()

    const fileReader = new FileReader();

    const [selectedFile, setSelectedFile] = useState(null)
    const [parsedInputFileRows, setParsedInputFileRows] = useState(null)
    const [parsedInputFileHeaders, setParsedInputFileHeaders] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [fileProcessingStep, setFileProcessingStep] = useState(1)

    const handleInputFileChange = (fileChangeEvent) => {
        setSelectedFile(fileChangeEvent.target.files[0])
    }

    const csvFileToArray = (string) => {
        const csvHeader = string.slice(0, string.indexOf("\r\n")).replace(/['"]+/g, '').split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).replace(/['"]+/g, '').split("\r\n");
        const array = csvRows.map(i => {
          const values = i.split(",");
          const obj = csvHeader.reduce((object, header, index) => {
            object[index] = values[index];
            return object;
          }, {});
          return obj;
        });
        setParsedInputFileHeaders(csvHeader)
        setParsedInputFileRows(array);
        setIsLoading(false)
      };

    const handleApplyButton = (e) => {
        e.preventDefault();

        if (selectedFile) {
            setIsLoading(true)
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };
            fileReader.readAsText(selectedFile);
        }
    }

    return (
        <div componentfile='MainScreen.js'>
            <Backdrop
                sx={{ color: '#fff', zIndex: 1000 }}
                open={isLoading}
            >
                <div style={{display:'flex', gap: 16, alignItems:'center'}}>
                    <CircularProgress color="inherit" />
                    {fileProcessingStep == 1 && <div>{fileProcessingStep}: Processing Input Data</div>}
                </div>
            </Backdrop>
            <Header/>
            <div className={classes.contentPage}>
                <TitleSection/>
                <Divider/>
                <UploadSection
                    selectedFile={selectedFile}
                    handleInputFileChange={handleInputFileChange}
                />
                <Divider/>
                <ParameterSection
                    selectedFile={selectedFile}
                    handleApplyButton={handleApplyButton}
                />
                <Divider/>
                <TableSection
                    parsedInputFileHeaders={parsedInputFileHeaders}
                    parsedInputFileRows={parsedInputFileRows}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default MainScreen;

const useStyles = makeStyles({
    contentPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        // minus height from padding and header,footer heights
        minHeight: 'calc(100vh - 240px)', 
        overflow:'overlay',
        paddingLeft:'10%',
        paddingRight:'10%',
        paddingTop:60,
        paddingBottom:60
    }
});