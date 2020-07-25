import React, { useState, useEffect } from 'react';
import { Container, Title, Icon, Message, Button, Caption } from '../styles/registrationStyles';

export default function RegisterSuccessScreen({ navigation }) {
  return (
    <Container>
      <Title>고유 식별 번호 생성</Title>
      <Icon source={ require('../assets/icon-register-success.png') }/>
      <Message>식별 번호 생성에 성공하였습니다.</Message>
      <Button onPress={() => {
        navigation.navigate('Scan');
      }}>
        <Caption>QR 코드 스캔하러 가기</Caption>
      </Button>
    </Container>
  );
}

RegisterSuccessScreen.navigationOptions = {
  header: null
};
