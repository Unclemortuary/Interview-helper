import React from "react";

import Navigation from "../navigation/Navigation";
import TargetDate from '../targetDate/TargetDate';
import Progress from "../progress/Progress";

//import './header.scss';

const Header = () => (
        <div className="header">
            <h1>Interview Logo Button</h1>
            <>
                <Navigation items={['HTTP','CSS','JavaScript','React.JS']}></Navigation>
                <TargetDate></TargetDate>
                <Progress progress={{ total:6, done: 2 }}></Progress>
            </>
        </div>
);

export default Header;