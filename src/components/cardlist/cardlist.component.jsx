import React from "react";

import {Card} from "../card/card.component"

import './cardlist.styles.css';


export const CardList = (props) => {
    console.log(props);

    return(
        <div className="cardlist"> 
        {props.players.map((player) => (
            <Card key={player.id} player={player}/>
        ))} 
        </div>
    )

}