import React from "react";
import "./App.css";
import MainUser from "./components/MainUser";
import MUFollowers from "./components/MUFollowers";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

const FollowersHeadline = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainUser: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/bamfranceschi").then(response => {
      this.setState({ mainUser: response.data });
      console.log(this.state.mainUser);
    });

    axios
      .get("https://api.github.com/users/bamfranceschi/followers")
      .then(response => {
        this.setState({ followers: response.data });
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <MainUser mainUser={this.state.mainUser} />
        <FollowersHeadline>
          {this.state.mainUser.name}'s Followers
        </FollowersHeadline>
        <MUFollowers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
