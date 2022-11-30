import React, { useEffect, useState } from "react";

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
        <div>
            <Header/>
            <Body appReady={appReady}></Body>
        </div>
    );
};

export default App;

// я тебя люблю <3
// сильно сильно