import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/bro.png")} />
      <View>
        <Text style={styles.paragraph}>
          Acess Pensions is a licensed Pension Fund Administrator (PFA), which
          resulted from the business combination of First Guarantee Pension
          Limited and Sigma Pensions Limited
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 200,
  },
  paragraph: {
    textAlign: "left",
    fontSize: 20,
    marginLeft: 30,
    marginRight: 10,
    color: "#989DA3",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#8DC63F",
    width: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
