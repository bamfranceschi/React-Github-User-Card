import React from "react";
import "./App.css";
import MainUser from "./components/MainUser";
import MUFollowers from "./components/MUFollowers";
import axios from "axios";

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
  }

  render() {
    return (
      <div>
        <MainUser mainUser={this.state.mainUser} />
        <MUFollowers />
      </div>
    );
  }
}

export default App;
