import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Manage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require("../../assets/images/smallAtm.png")} />

        <Image source={require("../../assets/images/bigAtm.png")} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Manage your pension the {"\n"}easy way</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.account}>
        <Text>
          Have an account yet?
          
        </Text>
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Manage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
  body: {
    marginLeft: 30,
  },
  title: {
    color: "#114185",
    fontSize: 40,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#8DC63F",
    width: 311,
    height: 61,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  account: {
    marginTop: 20,
    color: "#000000",
    flexDirection:"row"
  },
  text:{
    marginLeft:5,
    fontWeight:700
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
