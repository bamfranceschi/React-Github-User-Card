import React from "react";

function FollowerCard(props) {
  return (
    <div>
      <img></img>
      <div>
        <h3>UserName: {props.login}</h3>
        <img src={props.avatar_url}></img>
      </div>
    </div>
  );
}

export default FollowerCard;
