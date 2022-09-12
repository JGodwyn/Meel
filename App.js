import { useEffect, useState, useCallback } from 'react';
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
import Notifications from './screens/Notifications';
import * as SplashScreen from 'expo-splash-screen';
// import all the fonts from Google Fonts
import { useFonts } from 'expo-font';

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// all these are used for navigation
// initialize this for the stack
const Stack = createNativeStackNavigator();

// show the header or not
const screenOptions = {
  headerShown: false,
};

// this works as your default font
// you can override this in your
const customTextProps = {
  style: {
    fontSize: 14,
    fontFamily: 'jakarta-regular',
    color: 'black',
    lineHeight: 24,
  },
};

setCustomText(customTextProps);

export default function App() {
  const [fontsLoaded] = useFonts({
    'jakarta-regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'jakarta-bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'jakarta-semibold': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  });

  // set the app state
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (appIsReady && fontsLoaded) {
    // if the app is ready and fonts have loaded, hide the splash screen
    SplashScreen.hideAsync();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding1"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="Notifications" component={Notifications} />
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
  } else {
    return null;
  }
}

