import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { screens, stackNavigatorRoutes } from "./src/config";

// console.log('asdasdasd',stackNavigatorRoutes);
const navigator = createStackNavigator(stackNavigatorRoutes, {
  initialRouteName: screens[0].screenTitle,
  defaultNavigationOptions: {
    title: "Business Search",
  },
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({});
