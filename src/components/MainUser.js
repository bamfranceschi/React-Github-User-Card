import React from "react";
import styled from "styled-components";

const MainUserCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  margin: 4%;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const CardImg = styled.img`
  width: 300px;
  border-radius: 6px;
`;

function MainUser({ mainUser }) {
  return (
    <MainUserCard>
      <CardImg src={mainUser.avatar_url} />
      <div>
        <h3>{mainUser.name}</h3>
        <p>Username: {mainUser.login}</p>
        <p>Location: {mainUser.location}</p>
        <p>Followers: {mainUser.followers}</p>
        <p>Following: {mainUser.following}</p>
      </div>
    </MainUserCard>
  );
}

export default MainUser;
