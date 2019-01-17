import React from "react";
import "./style.css";

// Function to return Sidebar info
function Sidebar(props) {
    return ( 
        <div className="col-md-2 mt-3 pl-1">
            {/* Instructions section */}
            <h4>Simpsons Memory Game</h4>
            <p>Click on each one of the characters without repeating. See if you can get all 12 in a row.</p>
            
            {/* Area to display result of previous pick */}
            <h5 className="text-center">{props.message}</h5>

            {/* Area to show updated score */}
            <h5 className="mt-4 text-center">Your score</h5>
            <h4 className="text-center">{props.score}</h4>
            
            {/* Area to show the user's highest score so far */}
            <h5 className="mt-4 text-center">High score</h5>
            <h4 className="text-center">{props.highScore}</h4>
        </div>
    )
}

export default Sidebar;