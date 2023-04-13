import WelcomeLayout from "../Layouts/WelcomeLayout";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const Retirement= () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate("MultiFund");
  };

  return (
    <WelcomeLayout
      Title="Retirement Savings Account"
      text="To become an Acess Contributor, you must complete an RSA form after which, you will be issued a unique personal Identification Number (PIN)"
      button={
        <Button title="Continue" onPress={handleButtonPress} color="white" />
      }
      imageSource={require('../../assets/images/retirement.png')}
    />
  );
};

export default Retirement

