import React from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App1Stack = createStackNavigator();
const App2Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

// Define app1 navigator
export function App1Navigator() {
  return (
    <App1Stack.Navigator>
      <App1Stack.Screen
        name="Home"
        component={require("App1/screen/HomeScreen").default}
      />
    </App1Stack.Navigator>
  );
}

// Define app2 navigator
export function App2Navigator() {
  return (
    <App2Stack.Navigator>
      <App2Stack.Screen
        name="HomeScreen"
        component={require("App2/screen/HomeScreen").default}
      />
    </App2Stack.Navigator>
  );
}

// Main Navigator that includes both app1 and app2 as screens
export function createMainNavigator() {
  const MainStack = createStackNavigator();

  return function MainNavigator() {
    return (
      <NavigationContainer ref={navigationRef}>
        <MainStack.Navigator>
          <MainStack.Screen
            name="App1"
            component={App1Navigator}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="App2"
            component={App2Navigator}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  };
}
