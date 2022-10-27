import React from "react";

const Navigation = ({ items }) => {
    return (
        <ul>
            {
                items.map(el => <li key={el}><a>{el}</a></li>)
            }
        </ul>
    )
};  

export default Navigation;