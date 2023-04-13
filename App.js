import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components";
import Welcome from "./components/Modals/Welcome";
import Retirement from "./components/Modals/Retirement";
import { View } from "react-native";
import MultiFund from "./components/Modals/MultiFund";
import BenefitPayment from "./components/Modals/BenefitPayment";
import VoluntaryContributions from "./components/Modals/VoluntaryContributions";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Welcome}  options={{ headerShown: false }}/>
          <Stack.Screen name="Retirement" component={Retirement}  options={{ headerShown: false }}/>
          <Stack.Screen name="MultiFund" component={MultiFund}  options={{ headerShown: false }}/>
          <Stack.Screen name="BenefitPayment" component={BenefitPayment}  options={{ headerShown: false }}/>
          <Stack.Screen name="VoluntaryContributions" component={VoluntaryContributions}  options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
