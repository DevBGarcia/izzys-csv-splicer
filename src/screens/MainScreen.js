import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

/* Created Components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

import TitleSection from "../components/TitleSection";
import UploadSection from "../components/UploadSection";
import ParameterSection from "../components/ParameterSection";
import TableSection from "../components/TableSection";


const MainScreen = () => {

    const classes = useStyles()

    return (
        <div componentfile='MainScreen.js'>
            <Header/>
            <div className={classes.contentPage}>
                <TitleSection/>
                <Divider/>
                <UploadSection/>
                <Divider/>
                <ParameterSection/>
                <Divider/>
                <TableSection/>
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