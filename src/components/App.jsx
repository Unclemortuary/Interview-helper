import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Header from './header/Header';
import Body from "./Body";
import { initApp } from '../modules/app';
import './styles.scss';

const App = () => {
    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        initApp();
        setAppReady(true);
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Header/>
            <Body appReady={appReady}></Body>
        </LocalizationProvider>
    );
};

export default App;

// я тебя люблю <3
// сильно сильно