import React, { useId, useState } from "react";
import { Card as MUICard } from "@mui/joy";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Card = ({ cardName }) => {
    const id = useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <section>
            <MUICard>
                <Button
                    id={buttonId}
                    aria-controls={open ? menuId : undefined}
                    aria-haspopup={true}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <h2>{cardName}</h2>
                </Button>
                <Menu
                    id={menuId}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    PaperProps={{
                        'style': {
                            width: 320
                        }
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </MUICard>
        </section>
    );
};

export default Card;