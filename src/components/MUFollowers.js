import React from "react";
import FollowerCard from "./FollowerCard";
import styled from "styled-components";

const FollowersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin: 2%;
`;

function MUFollowers({ followers }) {
  return (
    <FollowersContainer>
      {followers.map(follower => (
        <FollowerCard
          key={follower.id}
          name={follower.name}
          login={follower.login}
          avatar_url={follower.avatar_url}
        />
      ))}
    </FollowersContainer>
  );
}

export default MUFollowers;
