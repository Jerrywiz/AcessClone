import React from "react";
import { View, Image, Button } from "react-native";
import WelcomeLayout from "../Layouts/WelcomeLayout";
import { useNavigation } from "@react-navigation/native";

const VoluntaryContributions = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate("Manage");
  };
  return (
    <WelcomeLayout
      Title="Voluntary Payment"
      text="Additional Voluntary Contributions are extra funds which you can opt to add to your mandatory pensions contributions, or simply set aside as Retirement savings."
      button={
        <Button title="Get Started" onPress={handleButtonPress} color="white" />
      }
      imageSource={require("../../assets/images/voluntary.png")}
    ></WelcomeLayout>
  );
};

export default VoluntaryContributions;
