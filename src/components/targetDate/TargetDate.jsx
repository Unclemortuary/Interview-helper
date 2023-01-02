import React, { useId, useState, useRef } from "react";
import Button from '@mui/material/Button';
import { DesktopDatePicker } from "@mui/x-date-pickers";

import './targetDate.scss';

const TargetDate = () => {
    const buttonRef = useRef();
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(previous => !previous);
    const handleOnChange = event => console.log(event);
    return (
        <Button sx={{
            flexDirection: 'column',
            textTransform: 'none',
            fontFamily: "unset",
            fontWeight: "unset",
            fontSize: "unset",
            color: "unset"
        }} 
        variant="text" 
        className="targetDateContainer"
        onClick={handleClick}
        ref={buttonRef}
        >
            <p>Target Date</p>
            <DesktopDatePicker
                inputFormat='MM/DD'
                open={open}
                PopperProps={{
                    anchorEl: buttonRef.current
                }}
                onChange={handleOnChange}
                renderInput={(props) => {
                    return <span>15/10</span>
                }}
            />
        </Button>
    );
};

export default TargetDate;