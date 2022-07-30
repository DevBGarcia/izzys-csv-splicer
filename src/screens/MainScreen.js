import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

/* Created Components */
import Header from "../components/Header";
import TitleSection from "../components/TitleSection";
import ImportSection from "../components/ImportSection";
import ParameterSection from "../components/ParameterSection";
import TableSection from "../components/TableSection";
import Footer from "../components/Footer";


const MainScreen = (props) => {

    const classes = useStyles()


    return (
        <div>
            <Header/>
            <div className={classes.contentPage}>
                <TitleSection/>
                <ImportSection/>
                <ParameterSection/>
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