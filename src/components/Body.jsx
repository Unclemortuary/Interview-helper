import React, { useEffect, useState } from "react";
import Card from './card/Card';

import { DATA_URL } from '../modules/resources';

const Body = ({ appReady }) => {
    const [questionsData, setQuestionsData] = useState({});

    // useEffect(() => {
    //     if (appReady) {
    //         fetch(DATA_URL)
    //             .then(data => data.json()
    //                 .then(jsonData => setQuestionsData(jsonData))
    //             );
    //     }
    // }, [appReady]);

    // console.log(questionsData);

    return (
        <main>
            {/* based on state <div>Question Card</div>
            <div>Topics grid</div> */}
            <Card cardName="What is HTTP?"></Card>
        </main>
    );
};

export default Body;