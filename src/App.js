import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Nav from "./components/Nav";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    winner: "",
    clicked: [],
  };


  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({clicked:this.state.clicked.concat(id)});
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      winner: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 36) {
      this.setState({ winner: "WINNER!!!" });
    }
    var shuffledArray = this.handlePictureShuffle(this.state.friends);
    this.setState({ friends: shuffledArray });
    
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winner: "Wrong answer -- please play again!",
      clicked: []
    });
    var shuffledArray = this.handlePictureShuffle(this.state.friends);
    this.setState({ friends: shuffledArray });
  };

  handlePictureShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
     let j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
 };

  render() {
    return (
      <Wrapper>

        <Nav
          winner={this.state.winner}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        
      <br/>
      <br/>
      <br/>

        <Title>Click Each Veggie Only Once to Win the Game!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            name={friend.name}
            key={friend.id}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;