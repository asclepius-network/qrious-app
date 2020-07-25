import React from 'react';
import { SafeAreaView } from 'react-navigation';
import styled from 'styled-components/native';
import Toggle from '../components/Toggle';
import { Settings } from 'react-native';

export default function SettingsScreen() {
  const settingOptions = [
    '블루투스 연결',
    '내 계정 정보',
    'Face ID 및 암호 설정',
    '알림 설정',
    '개인정보 권한 설정',
    '약관 및 이용동의',
    '로그아웃'
  ]

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Container>
        <Title>설정</Title>
      </Container>
      <List
        data={settingOptions}
        keyExtractor={(item) => settingOptions.indexOf(item).toString()}
        renderItem={({ item }) => {
          return item === '블루투스 연결'
          ? (
            <ItemContainer>
              <Subtitle>{item}</Subtitle>
              <Toggle/>
            </ItemContainer>
          ) : (
            <ItemContainer>
              <Subtitle>{item}</Subtitle>
           </ItemContainer>
          )
        }}
      />
    </SafeAreaView>
  );
};

SettingsScreen.navigationOptions = {
  header: null
};

const Container = styled.View``;

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin: 70px 0 30px 50px;
`;

const List = styled.FlatList``;

const ItemContainer = styled.View`
  margin: 20px 0 20px 50px;
  flex-direction: row;
  align-items: center;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  flex: 1;
`;

const Signout = styled.Button`
  font-size: 20px;
  color: black;
  border: red 1px;
`;
