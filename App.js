import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import WelcomeNavigation  from "./components/Navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeNavigation}  />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
