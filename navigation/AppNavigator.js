import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignUpScreen';
import OnboardingScreen1 from '../screens/OnboardingScreen1';
import OnboardingScreen2 from '../screens/OnboardingScreen2';
import OnboardingScreen3 from '../screens/OnboardingScreen3';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="onboarding3" component={OnboardingScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
