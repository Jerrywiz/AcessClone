import React from "react";
import WelcomeLayout from "../Layouts/WelcomeLayout";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";


const BenefitPayment = () => {
    const navigation = useNavigation();
    const handleButtonPress = () => {
      navigation.navigate("VoluntaryContributions");
    };
  return (
    <WelcomeLayout
    Title="Benefit Payment  "
      text="Retirement Benefit is a determined payment made to a Retirement
      Savings Account holder upon retirement from active service. This
      payment is made in periodic sums."
      button={
        <Button title="Continue" onPress={handleButtonPress} color="white" />
      }
      imageSource={require("../../assets/images/benefit.png")}
    ></WelcomeLayout>
  );
};

export default BenefitPayment;
