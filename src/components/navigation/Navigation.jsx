import React from "react";

const Navigation = ({ items }) => {
    return (
        <nav>
            <ul>
                {
                    items.map(el => <li key={el}><a>{el}</a></li>)
                }
            </ul>
        </nav>
    )
};  

export default Navigation;