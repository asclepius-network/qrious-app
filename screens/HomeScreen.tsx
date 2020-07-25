import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, Text, Button, ScrollView } from 'react-native';
import PieChart from '../components/PieChart';
import call from 'react-native-phone-call';
import Visited from '../components/VisitedLocation';
import { Hr } from '../styles/generalStyles';

export default function HomeScreen({ navigation }) {
  const green = "#06c258";
  const yellow = "#fcd12a";
  const red = "#FF0000"
  return (
    <Container>
        <Title>코로나 안심도 측정기</Title>
        <PieChart />
        <Icon source={ require('../assets/icon-meter.png') }/>
        <Button title="질병관리본부 문의하기 >" onPress={() => call({number: '1339'}).catch(console.error)}/>
        <Hr/>
        <Subtitle>최근 방문한 장소들</Subtitle>
        <Visited address="서울 서초구 사평대로 368 1층 투썸플레이스 교보타워사거리점" color={green}/>
        <Visited address="서울 강남구 압구정로 165 현대백화점본점" color={red}/>
        <Visited address="서울 서초구 사평대로 349 서초빌딩 금강바비큐" color={yellow}/>
        <Visited address="서울 서초구 서초동 신논현역 7번출구" color={green}/>
        <Visited address="서울 서초구 서초동 신논현역 8번출구" color={yellow}/>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const Container = styled.View`
  align-items: center;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  margin-top: 100px;
  color: #0c0f12;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-vertical: 20px;
  margin-left: 30px;
  color: #0c0f12;
  align-self: flex-start;
`;

const Icon = styled.Image`
  height: 90px;
  width: 90px;
  position: absolute;
  top: 215px;
`;