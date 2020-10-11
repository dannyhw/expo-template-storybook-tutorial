import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Welcome({ onPress, name }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ fontFamily: "NunitoSans" }}>
        Hi {name}, welcome to react native storybook. This is an example
        component to get you started.
      </Text>
    </TouchableOpacity>
  );
}
