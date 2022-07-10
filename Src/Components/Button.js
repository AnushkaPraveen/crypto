import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../Core/theme";

export default function AppButton({ mode, style, onPress, ...props }) {
  return (
    <Button
      style={[
        styles.button,
        mode === "outlined" && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      onPress={onPress}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
    height: 45,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 23,
  },
});
