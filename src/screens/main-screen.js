import React, {useState} from "react";
import { makeStyles } from '@mui/styles';


const MainScreen = (props) => {

    const classes = useStyles()


    return(
        <div className={classes.mainScreenContainer}> 
            <div className={classes.stepHeader}>STEP 1: UPLOAD CSV FILE</div>
            <div className={classes.stepHeader}>STEP 2: SELECT PARAMETERS</div>
            <div className={classes.stepHeader}>STEP 3: PREVIEW</div>
        </div>
    )   
}

export default MainScreen

const useStyles = makeStyles({
    mainScreenContainer:{
        display:'flex',
        flexDirection:'column'
    },
    stepHeader:{
        fontSize: 32,
    }
});