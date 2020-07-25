import React, { useState } from "react";
import styled from 'styled-components/native';

export default function Visited({ address, color }) {
  return (
    <Container style={{ borderLeftColor: color }}>
      <Text>{address}</Text>
    </Container>
  );
};

const Container = styled.View`
  width: 90%;
  background-color: white;
  border-width: 4px;
  border-color: white;
  margin-vertical: 8px;
  padding: 25px 30px;
  border-radius: 5px;
  shadow-color: #ededeb;
  shadow-offset: {
    width: 0,
    height: 8,
  };
  shadow-opacity: 0.44;
  shadow-radius: 10.32;
  elevation: 16;
`;

const Text = styled.Text`
  font-size: 16px;
`;
