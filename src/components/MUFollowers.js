import React from "react";
import FollowerCard from "./FollowerCard";

function MUFollowers({ followers }) {
  return (
    <div>
      {followers.map(follower => (
        <FollowerCard
          key={follower.id}
          name={follower.name}
          login={follower.login}
          avatar_url={follower.avatar_url}
        />
      ))}
    </div>
  );
}

export default MUFollowers;
