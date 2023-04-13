import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import WelcomeLayout from "../Layouts/WelcomeLayout";


const MultiFund = () => {
    const navigation = useNavigation();
    const handleButtonPress = () => {
      navigation.navigate("BenefitPayment");
    };
  return (
    <WelcomeLayout
    Title="Multi-Fund Structure"
      text="Multi-fund structure is a framework that aims to match your age and risk profile to one of four distinct RSA funds - i.e, three RSA FUND types for active contributors and one Retiree Fund for retired contributors "
      button={
        <Button title="Continue" onPress={handleButtonPress} color="white" />
      }
      imageSource={require('../../assets/images/multifund.png')}
    ></WelcomeLayout>
  );
};

export default MultiFund
