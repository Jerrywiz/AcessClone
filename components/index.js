import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/AcessLogo.png")}
        style={styles.image}
      />
      <Text style={styles.text}>
        Access {"\n"}pension {"\n"}
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:60
  },
  text: {
    color: "#114185",
    fontSize: 35,
  },
  image: {
    height: 100,
    width: 100,
  },
});
