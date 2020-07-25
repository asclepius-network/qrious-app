import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: #f0f3f5;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 200px;
`;

export const Icon = styled.Image`
  width: 120px;
  height: 120px;
  margin-top: 120px;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px 70px;
  border-color: #a9e0ff;
  border-width: 4px;
  border-radius: 50px;
  position: absolute;
  background-color: white;
  bottom: 140px;
`;

export const Caption = styled.Text`
  font-size: 18px;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 25px;
`;