import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import TableFilePreview from './TableFilePreview';
import Pagination from '@mui/material/Pagination';


const SplitFilesPreview = (props) => {

    const {
        parsedInputFileHeaders,
        splitFiles,
        fileSplitCount
    } = props

    const [fileIndex, setFileIndex] = useState(1);

    const handleChangeFileIndex = (event, value) => {
        setFileIndex(value);
    };


    return (
        <div componentfile='SplitFilesPreview.js' style={{ width: '100%', border: '1px solid rgba(224, 224, 224, 1)', height: 640}}>
            {splitFiles.length === 0 && 
                <div style={{fontSize:32, padding: 16}}>* Upload a file along with an input parameter to display a preview</div>
            }
            {splitFiles.length > 0 && 
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Pagination count={fileSplitCount} page={fileIndex} onChange={handleChangeFileIndex} color="primary" sx={{padding:2, alignSelf:'flex-end'}} />
                <TableFilePreview
                    parsedInputFileHeaders={parsedInputFileHeaders}
                    parsedInputFileRows={splitFiles[fileIndex-1]}
                    isSplitTableView
                />
            </div>
            }
        </div>
    );
}

export default SplitFilesPreview

const useStyles = makeStyles({
});