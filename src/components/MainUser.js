import React from "react";

function MainUser(props) {
  return (
    <div className={"mainUserCard"}>
      {/* display user data here */}
      <div>
        <img></img>
        <div>
          <h3>{props.mainUser.name}</h3>
          <p>{props.mainUser.login}</p>
          <p>{props.mainUser.location}</p>
          <p>Profile</p>
          <p>{props.mainUser.followers}</p>
          <p>{props.mainUser.following}</p>
          <p>Bio</p>
        </div>
      </div>
    </div>
  );
}

export default MainUser;
