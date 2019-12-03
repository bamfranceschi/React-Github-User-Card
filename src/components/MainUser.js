import React from "react";

function MainUser({ mainUser }) {
  return (
    <div className={"mainUserCard"}>
      {/* display user data here */}
      <div>
        <img></img>
        <div>
          <h3>Name: {mainUser.name}</h3>
          <p>Username: {mainUser.login}</p>
          <p>Location: {mainUser.location}</p>
          <p>Followers: {mainUser.followers}</p>
          <p>Following: {mainUser.following}</p>
          <p>Bio: {mainUser.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default MainUser;
