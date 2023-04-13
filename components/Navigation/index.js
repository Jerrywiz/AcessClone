import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Modals/Welcome";
import Retirement from "../Modals/Retirement";
import MultiFund from "../Modals/MultiFund";
import BenefitPayment from "../Modals/BenefitPayment";
import VoluntaryContributions from "../Modals/VoluntaryContributions";
import Home from "..";
import Manage from "../Modals/Manage";

const Stack = createStackNavigator();

export default function WelcomeNavigation () {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Login" component={Welcome} />
      <Stack.Screen name="Retirement" component={Retirement} />
      <Stack.Screen name="MultiFund" component={MultiFund} />
      <Stack.Screen name="BenefitPayment" component={BenefitPayment} />
      <Stack.Screen name="VoluntaryContributions" component={VoluntaryContributions} />
      <Stack.Screen name="Manage" component={Manage} />
    </Stack.Navigator>
  );
}
