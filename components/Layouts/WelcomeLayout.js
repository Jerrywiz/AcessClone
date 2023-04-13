import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const WelcomeLayout = ({ text, imageSource, button, Title }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <View style={styles.body}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
      <Button title="Skip" color="#004185" />
    </View>
  );
};

export default WelcomeLayout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 200,
  },
  body: {
    marginLeft: 30,
  },
  title: {
    color: "#004185",
    fontSize: 20,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 15,
    color: "#989DA3",
    fontFamily: "Arial",
    width: 287,
    height: 76,
    textAlign: "center",
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
