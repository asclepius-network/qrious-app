import React, { useState, useEffect } from 'react';
import { Container, Title, Icon, Button, Caption } from '../styles/registrationStyles';

export default function RegisterStartScreen({ navigation }) {
  return (
    <Container>
      <Title>고유 식별 번호 생성</Title>
      <Icon source={ require('../assets/icon-register-start.png') }/>
      <Button onPress={() => {
        //Make request here
        //Conditional navigation here based on request success/failure
        navigation.navigate('RegisterSuccess');
      }}>
        <Caption>탭하여 고유 식별 번호 생성</Caption>
      </Button>
    </Container>
  );
}

RegisterStartScreen.navigationOptions = {
  header: null
};
