import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function AnonymousUser() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Anonymous user Screen</Text>
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
