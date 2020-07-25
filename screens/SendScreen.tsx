import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Icon,
  Button,
  Caption,
} from "../styles/registrationStyles";
import { Text } from "react-native";

export default function SendScreen({ navigation }) {
  console.log(navigation.state.params);
  return (
    <Container>
      <Title>고유 식별 번호 생성</Title>
      <Icon source={require("../assets/icon-register-start.png")} />
      <Text>{navigation.state.params.qrCode}</Text>
      <Button
        onPress={() => {
          //Make requjuest here
          //Conditional navigation here based on request success/failure
          navigation.navigate("RegisterSuccess");
        }}
      >
        <Caption>탭하여 고유 식별 번호 생성</Caption>
      </Button>
    </Container>
  );
}

SendScreen.navigationOptions = {
  header: null,
};
