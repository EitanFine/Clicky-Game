import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clickedFriends: [],
    score: 0,   
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };


  onClickFriend = id => {
    let newFriends= this.state.friends
    let shuffleFriends = this.shuffle(newFriends)
    let inArray = this.state.clickedFriends.indexOf(id);

    if (inArray === -1){
      let newClickedFriends = this.state.clickedFriends;
      newClickedFriends.push(id)
      let newScore = this.state.score + 1
      this.setState({
        clickedFriends: newClickedFriends,
        score: newScore,
        friends: shuffleFriends
      })
    }
    else{
      this.setState({
        clickedFriends: [],
        score: 0,
        friends: shuffleFriends
      })
    }
  };

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }  



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Title>Friends List</Title>
      <h3 className="text-center">Score: {this.state.score}</h3>
      <Wrapper>
      
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.onClickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
