import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Register Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
