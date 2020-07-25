import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

interface ISectionScreenProps {
  navigation: any;
}

class SectionScreen extends React.Component<ISectionScreenProps> {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    return (
      <Container>
        <Cover>
          <Image source={section.image} />
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <Content>
          <WebView source={{ html: htmlContent }} />
        </Content>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 40,
            right: 20
          }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              style={{ marginTop: -2 }}
              color="#4775f2"
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17;
  position: absolute;
  bottom: 20px;
  left: 20px;
  max-width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const htmlContent = `
      <h2>This is a title</h2>
      <p>This <strong>is</strong> a <a href="http://designcode.io">link</a></p>
      <img src="https://cl.ly/8861f359ed6d/download/Wave14.jpg" />
    `;

const Content = styled.View`
  height: 100%;
`;
