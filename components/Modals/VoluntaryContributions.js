import React from "react";
import { View, Image, Button } from "react-native";
import WelcomeLayout from "../Layouts/WelcomeLayout";

const VoluntaryContributions = () => {
  return (
    <WelcomeLayout
      Title="Voluntary Payment"
      text="Additional Voluntary Contributions are extra funds which you can opt to add to your mandatory pensions contributions, or simply set aside as Retirement savings."
      button={<Button title="Continue" color="white" />}
      imageSource={require("../../assets/images/voluntary.png")}
    ></WelcomeLayout>
  );
};

export default VoluntaryContributions;
