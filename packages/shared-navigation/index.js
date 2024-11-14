import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../AwesomeTSProject/screens/HomeScreen";
import App1Navigator from "../App1/App1Navigator";
import App2Navigator from "../App2/App2Navigator";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="App1" component={App1Navigator} />
      <Stack.Screen name="App2" component={App2Navigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
