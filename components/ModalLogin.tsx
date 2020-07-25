import React from "react";
import styled from "styled-components/native";

import { Dimensions } from "react-native";

class ModalLogin extends React.Component {
  render() {
    return (
      <Container>
        <Modal style={{ top: Dimensions.get("window").height / 2 }}>
          <Logo source={require("../assets/icon.png")} />
          <Text>Start Learning. Access Pro Content.</Text>
          <TextInput></TextInput>
          <Text></Text>
          <TextInput></TextInput>
          <Button>
            <ButtonText>Log in</ButtonText>
          </Button>
        </Modal>
      </Container>
    );
  }
}

export default ModalLogin;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
`;
const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const Logo = styled.Image``;
const Text = styled.Text``;
const TextInput = styled.TextInput``;
const Button = styled.View``;

const ButtonText = styled.Text``;
