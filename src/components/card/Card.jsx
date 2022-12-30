import React from "react";
import { Card as MUICard } from "@mui/joy";

const Card = ({ cardName }) => (
    <section>
        <MUICard>
            <h2>{cardName}</h2>
        </MUICard>
    </section>
);

export default Card;