import React from "react";

import "./card.styles.css"

export const Card = (props) => {
    
    return(
        <div className="card-container">
            <img alt={props.player.name} src={`https://robohash.org/${props.player.id}?set=set2&size=80x120`}/>
            <h5> {props.player.name} </h5>
            <h6> {props.player.id} </h6>
            <p> {props.player.email} </p>
        </div>
    )

}