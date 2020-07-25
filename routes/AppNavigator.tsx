import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import RegisterStartScreen from "../screens/RegisterStartScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
  // Home: HomeScreen,
  // Section: SectionScreen
  RegisterStart: RegisterStartScreen
});

export default createAppContainer(TabNavigator);
