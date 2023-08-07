import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1``;
const Listoption = styled.ul``;
const Option = styled.li``;

function Home() {
  return (
    <Container>
      <Header>BNK48 Facial Recognition App</Header>

      <Listoption>
        <Link to={"/photo"} style={{ color: "#551a8b" }}>
          <Option>Photo Input</Option>
        </Link>
        <Link to={"/video"} style={{ color: "#551a8b" }}>
          <Option>Video Camera</Option>
        </Link>
      </Listoption>
    </Container>
  );
}

export default Home;
