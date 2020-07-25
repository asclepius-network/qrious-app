import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import ScanScreen from "../screens/ScanScreen";
import SettingsScreen from "../screens/SettingsScreen";
import RegisterStartScreen from "../screens/RegisterStartScreen";
import RegisterSuccessScreen from "../screens/RegisterSuccessScreen";
import RegisterFailScreen from "../screens/RegisterFailScreen";
import SendScreen from "../screens/SendScreen";

import { Ionicons } from "@expo/vector-icons";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen,
});

const ScanFlow = createSwitchNavigator({
  RegisterStart: RegisterStartScreen,
  RegisterSuccess: RegisterSuccessScreen,
  RegisterFail: RegisterFailScreen,
  Scan: ScanScreen,
  Send: SendScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: "피드",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

ScanFlow.navigationOptions = {
  tabBarLabel: "스캔",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="md-camera"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

SettingsStack.navigationOptions = {
  header: null,
  tabBarLabel: "설정",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-settings"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ScanFlow,
    SettingsStack,
  },
  {
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
    },
  }
);

export default TabNavigator;
