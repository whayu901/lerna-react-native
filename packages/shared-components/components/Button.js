import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text = "hello" }) => (
  <TouchableOpacity>
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default Button;
