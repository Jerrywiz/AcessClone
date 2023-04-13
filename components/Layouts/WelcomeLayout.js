import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
const WelcomeLayout = ({ text, imageSource, button, Title }) => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate("Manage");
  };
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
      <Button title="Skip" color="#004185" onPress={handleButtonPress}/>
    </View>
  );
};

export default WelcomeLayout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 150,
  },
  body: {
    marginLeft: 20,
  },
  title: {
    color: "#004185",
    fontSize: 20,
    textAlign: "center",
    marginTop:5
  },
  paragraph: {
    marginTop:5,
    fontSize: 15,
    color: "#989DA3",
    fontFamily: "Arial",
    textAlign: "center",
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
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
