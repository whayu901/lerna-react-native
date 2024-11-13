import React from "react";
import { createAppNavigator } from "@shared/navigation";
import HomeScreen from "./src/screen/HomeScreen";

const screens = [
  { name: "Home", component: HomeScreen, options: { title: "Home - App1" } },
];

const AppNavigator = createAppNavigator(screens, "Home");

export default function App() {
  return <AppNavigator />;
}
