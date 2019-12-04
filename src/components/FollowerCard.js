import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  max-width: 400px;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const CardImg = styled.img`
  width: 300px;
  border-radius: 6px;
`;

function FollowerCard(props) {
  return (
    <CardDiv>
      <CardImg src={props.avatar_url}></CardImg>
      <h3>Username: {props.login}</h3>
    </CardDiv>
  );
}

export default FollowerCard;
