import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import OnboardingScreen1 from '../screens/OnboardingScreen1';
import OnboardingScreen2 from '../screens/OnboardingScreen2';
import OnboardingScreen3 from '../screens/OnboardingScreen3';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignUpScreen';
import SignUpForm from '../screens/Signupform';
import HomeScreen from '../screens/HomeScreen';
import LoanLandingScreen from '../screens/LoanLandingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpForm} />
        <Stack.Screen name="onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="loanLandingScreen" component={LoanLandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
