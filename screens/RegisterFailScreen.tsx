import React, { useState, useEffect } from 'react';
import { Container, Title, Icon, Message, Button, Caption } from '../styles/registrationStyles';

export default function RegisterSuccessScreen() {
  return (
    <Container>
      <Title>고유 식별 번호 생성</Title>
      <Icon source={ require('../assets/icon-register-failure.png') }/>
      <Message>처리에 실패하였습니다.{'\n'}다시 시도해주세요.</Message>
      <Button onPress={() => {}}>
        <Caption>탭하여 고유 식별 번호 생성</Caption>
      </Button>
    </Container>
  );
}

RegisterSuccessScreen.navigationOptions = {
  header: null
};
