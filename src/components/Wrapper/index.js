import React from "react";
import "./style.css";

// Wrapper creates the container for the game board
function Wrapper(props) {
    return (
        <div className="container my-5">
            <div className="row mx-1">{props.children}</div>
        </div>
    )
}

export default Wrapper;