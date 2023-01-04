import React from "react";
import LinearProgress from "@mui/joy/LinearProgress";

const Progress = props => {
    const { progress: { total, done } } = props;
    const percentage = (done/total) * 100;

    return (
        <div>
            <div>
                <p>Remaining Questions</p>
                {/* hover with numeric tip */}
                <LinearProgress determinate value={percentage}/>
            </div>
        </div>
    );
}
    

export default Progress;