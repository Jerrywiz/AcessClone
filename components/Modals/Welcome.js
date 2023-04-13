import WelcomeLayout from "../Layouts/WelcomeLayout";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const Welcome = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate("Retirement");
  };

  return (
    <WelcomeLayout
      Title="Welcome"
      text="Acess Pensions is a licensed pension Fund Admnistrator (PFA), which resulted from the business combination and of First Gurantee Pension Limited and Sigma Pensions Limited."
      button={
        <Button title="Continue" onPress={handleButtonPress} color="white" />
      }
      imageSource={require("../../assets/images/welcome.png")}
    />
  );
};

export default Welcome;
