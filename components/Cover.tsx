import React from "react";
import styled from "styled-components/native";

class Cover extends React.Component {
  render() {
    return (
      <Container>
        <Image source={require("../assets/background2.jpg")} />
        <Title>Meng To</Title>
        <Subtitle>meng@designcode.io</Subtitle>
      </Container>
    );
  }
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

export default Cover;
