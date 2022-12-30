import React from "react";
import Button from '@mui/material/Button';

import './targetDate.scss';

const TargetDate = () => (
    <Button sx={{
        flexDirection: 'column',
        textTransform: 'none',
        fontFamily: "unset",
        fontWeight: "unset",
        fontSize: "unset",
        color: "unset"
    }} 
    variant="text" 
    className="targetDateContainer">
        <p>Target Date</p>
        <span>15/10</span>
    </Button>
);

export default TargetDate;