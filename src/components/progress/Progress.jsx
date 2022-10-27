import React from "react";

const Progress = props => {
    const { progress: { total, done } } = props;

    return (
        <div>
            <div>
                <p>Remaining Questions</p>
                <p>{done}/{total}</p>
            </div>
            <div>Progress Bar</div>
        </div>
    );
}
    

export default Progress;