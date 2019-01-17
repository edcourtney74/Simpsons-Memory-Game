import React, { Component } from 'react';
import './App.css';
import SimpsonsCard from "./components/SimpsonsCard";
import Sidebar from "./components/Sidebar"
import Wrapper from "./components/Wrapper"
import simpsons from "./simpsons.json";

class App extends Component {
  // Setting state to simpsons json array, score and message
  state = {
    simpsons,
    score: 0,
    message: "",
    highScore: 0
  };

  // Function for resetting the game
  gameReset = () => {
    // Use .map to reset all the characters' clicked value to false
    const simpsons = this.state.simpsons.map(character => {
      return {
        ...character,
        clicked: false
      }
    })

    // Shuffle the array to start
    this.shuffle(simpsons);

    // Set the state with the reset array and reset score to 0
    this.setState({
      simpsons,
      score: 0,
    })
  }

  // Function to shuffle the characters, based on the Fisher-Yates Shuffle
  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // Check to see if elements remain to be shuffled
    while (0 !== currentIndex) {
  
      // Pick a remaining element at random, then reduce currentIndex by 1
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Swap the randomly chosen element with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }  
    return array;
  }  
  
  // Function for the gameplay that passes in the clicked character's id and clicked value
  gameplay = (id, clicked) => {
    // If the clicked value is false...
    if (!clicked) {
      // If the user's score is 12, the game is won
      if (this.state.score + 1 === 12) {
        // Set state to show "You won! message"
        this.setState({
          message: "You won! Try to duplicate your feat by picking another character.",
          highScore: 12
        })
        // Call resetGame function to reset game
        this.gameReset();

        // If the score is less than 11, continue with the game
      } else {
        // Use .map to create a new simpsons array and change the selected character's clicked value to true  
        const simpsons = this.state.simpsons.map(character => {
          if (id === character.id) {
            // If id from click equals character id, change clicked to true and keep all other info the same
            return {
              ...character,
              clicked: true
            }
            // If character doesn't equal click, keep all info the same
          } else {
            return { ...character }
          }
        })

        // Shuffle the new simpsons array
        this.shuffle(simpsons);

        // Set the state with the new shuffled array and update score and message
        this.setState({
          simpsons,
          score: this.state.score + 1,
          message: "Correct!"
        })
      }
    
    // If the clicked value is true, the game is over
    } else {
        // Set state to display loss message
        this.setState({
        message: "Sorry, you lost. Try again by picking a new character.",
        highScore: this.state.score
        })
        // Call gameReset function to start a new game
        this.gameReset();
    }
  }

  render() {
    console.log(this.state.simpsons);
    return (
      <div>
        <Wrapper>       
        <Sidebar
          score={this.state.score}
          message={this.state.message}
          highScore={this.state.highScore}
        ></Sidebar>
        <div className="col-md-10 my-3">
          <div className="row">
            {this.state.simpsons.map(character => (
              <SimpsonsCard
                gameplay={this.gameplay}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                clicked={character.clicked}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
    );
  }
}

export default App;
