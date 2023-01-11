import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const image = require("../../assets/images/instantdeliveries.jpg");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} resizeMode="cover">
        <Text style={styles.text} >YOU ORDER WE DELIVER</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Anonymous")}>
          <Text>Continue Without Acount </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent:"center",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
  },
  text: {
    color: "#ff8c1a",
    fontSize: 65,
    lineHeight: 100,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  // backgroundColor: "#000000c0"

  button: {
    // width: 100,
    alignItems: "center",
    backgroundColor: "#ff8c1a",
    padding: 20,
    borderRadius: 50,
    margin: 30,
  },
});
