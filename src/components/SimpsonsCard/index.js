import React from "react";
import "./style.css";

// Function to display Simpson Cards info
function SimpsonsCard(props) {
    return ( 
        <div className="col-4 col-md-2 card my-1 p-2">
            <img alt={props.name} src={props.image} onClick={() => props.gameplay(props.id, props.clicked)}/>
        </div>
    )
}

export default SimpsonsCard;