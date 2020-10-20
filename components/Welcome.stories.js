import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { View } from "react-native";
import Welcome from "./Welcome";

storiesOf("Example story", module)
  .addDecorator((story) => (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 24,
        justifyContent: "center",
      }}
    >
      {story()}
    </View>
  ))
  .add("welcome", () => (
    <Welcome
      onPress={action("Hello World!")}
      name={text("Your Name", "Developer")}
    />
  ));
