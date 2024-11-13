import React from "react";
import { createAppNavigator } from "@shared/navigation";
import HomeScreen from "./src/screen/HomeScreen";

const screens = [
  {
    name: "HomeApp2",
    component: HomeScreen,
    options: { title: "Home - App2" },
  },
];

const AppNavigator = createAppNavigator(screens, "HomeApp2");

export default function App() {
  return <AppNavigator />;
}
