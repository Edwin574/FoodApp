import React, { useState } from "react";
import { View, StyleSheet, Text,TextInput} from "react-native";

export default function Login() {
  const [username, onChangeUserName] = useState("Username");
  const [email, setEmail] = useState(null);
  return (
   
      <View style={styles.container}>
        <Text>Welcome to Login Screen</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          value={username}
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="someone@example.com"
        />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
