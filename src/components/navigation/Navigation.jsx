import React, { useState } from "react";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import './navigation.scss';

const Navigation = ({ items }) => {
    const [activeTab, setActiveTab] = useState(0);
    const onSetActiveTab = (event, activeTab) => setActiveTab(activeTab);

    return (
        <Tabs
            value={activeTab}
            onChange={onSetActiveTab}
            variant='scrollable'>
            {
                items.map(el => <Tab key={el} label={el}/>)
            }
        </Tabs>
    )
};  

export default Navigation;