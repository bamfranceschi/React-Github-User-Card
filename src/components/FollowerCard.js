import React from "react";

function FollowerCard(props) {
  return (
    <div>
      <img></img>
      <div>
        <h3>{props.mainUser.name}</h3>
        <p>UserName</p>
        <p>Location</p>
        <p>Profile</p>
        <p>Followers</p>
        <p>Following</p>
        <p>Bio</p>
      </div>
    </div>
  );
}

export default FollowerCard;
