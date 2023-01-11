import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const image = require("../../assets/images/fastfood.jpg");

export default function SecondDisplay({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} resizeMode="cover">
        <Text style={styles.text}>INSTANT DELIVERIES</Text>
        <View>
          <Text style={styles.text2}>Dedicated Courier</Text>
          <Text style={styles.text2}>Fast Vehicles</Text>
          <Text style={styles.text2}>Smooth Payments</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={goToHome}>
            <Text style={styles.buttontext}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={goToHome}>
            <Text style={styles.buttontext}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    // justifyContent:"center",
  },
  text: {
    color: "white",
    fontSize: 40,
    lineHeight: 100,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0"
  },
  text2: {
    color: "yellow",
    fontSize: 40,
    textAlign: "center",
  },
  button: {
    width: 100,
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
  buttons: {
    // backgroundColor: "red",
    width: 400,
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
  },
  buttontext: {
    color: "yellow",
    fontSize: 20,
  },
});
