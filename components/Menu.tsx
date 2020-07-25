import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  TouchableOpacity,
  Easing,
  TouchableHighlightBase
} from "react-native";

import MenuItem from "./MenuItem";

import { items } from "../queries/items";
const screenHeight = Dimensions.get("window").height;

interface IMenuProps extends DispatchProps, StateProps {
  closeMenu: any;
}

interface IMenuState {
  top: Animated.Value;
}

class Menu extends React.Component<IMenuProps, IMenuState> {
  state = {
    top: new Animated.Value(screenHeight + 500),
    scale: new Animated.Value(1)
  };

  toggleMenu = () => {
    if (this.props.action == "closeMenu") {
      // Close
      Animated.spring(this.state.top, {
        toValue: screenHeight + 500
      }).start();
    }
    if (this.props.action == "openMenu") {
      // Open
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    }
  };

  componentDidUpdate = () => {
    this.toggleMenu();
  };

  render() {
    return (
      <AnimatedContainer
        style={{
          top: this.state.top
        }}
      >
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Meng To</Title>
          <Subtitle>meng@designcode.io</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      }),
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 142px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;
