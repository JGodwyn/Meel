import { setCustomText } from 'react-native-global-props';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import CreateAccount from './screens/CreateAccount';
import Login from './screens/Login';
import Terms from './screens/Terms';
import AppLoading from 'expo-app-loading';
// import all the fonts from Google Fonts
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

// all these are used for navigation
// initialize this for the stack
const Stack = createNativeStackNavigator();
// show the header or not
const screenOptions = {
  headerShown: false,
};

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: 'black',
  },
};

setCustomText(customTextProps);

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding1"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Onboarding1" component={Onboarding1} />
          <Stack.Screen name="Onboarding2" component={Onboarding2} />
          <Stack.Screen name="Onboarding3" component={Onboarding3} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
