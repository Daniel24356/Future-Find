import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import OnboardingScreen1 from '../screens/OnboardingScreen1';
import OnboardingScreen2 from '../screens/OnboardingScreen2';
import OnboardingScreen3 from '../screens/OnboardingScreen3';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignUpScreen';
import TransactionDetails from '../screens/TransactionDetails';
import BetAccount from '../screens/BetAccount';
import SignUpForm from '../screens/Signupform';
import HomeScreen from '../screens/HomeScreen';
import LoanLandingScreen from '../screens/LoanLandingScreen';
import ProfileScreen from '../screens/profileScreen';
import RepayLoan from '../screens/RepayLoan';
import ContributeDetails from '../screens/ContributeDetails';
import ContributeScreen2 from '../screens/ContributeScreen2';
import InviteScreen from '../screens/InviteScreen';
import ResetPassword from '../screens/ResetPassword';
import Settings from '../screens/Settings';
import Payments from '../screens/Payments';
import Investment from '../screens/Investment';
import Notification from '../screens/Notification';
import FixPlanScreen from '../screens/FixplanScreen';
import FinalWithdrawal from '../screens/FinalWithdrawal';
import Transaction from '../screens/Transaction';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileScreen from '../screens/profileScreen';
import Group_members from '../screens/Group_members';
import OTPScreen from '../screens/OTPScreen';
import BVNScreen from '../screens/BVNScreen';
import AirtimeTopupScreen from '../screens/AirtimeTopupScreen'
import Contribution_Active from '../screens/Contribution_Active';
import Group_Details from '../screens/Group_Details';
import Investment from '../screens/Investment';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Transaction"component={Transaction} />
        <Stack.Screen name="Notifications" component={Notification} />
        <Stack.Screen name="Investments" component={Investment} />
        <Stack.Screen name="Payment" component={Payments} />
      <Stack.Screen name='OTPScreen' component={OTPScreen}/>
      <Stack.Screen name='BVNScreen' component={BVNScreen}/>
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="Resetpassword" component={ResetPassword} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpForm} />
        <Stack.Screen name="onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="loanLandingScreen" component={LoanLandingScreen} />
        <Stack.Screen name="Group_members" component={Group_members} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="repayLoan" component={RepayLoan} />
        <Stack.Screen name="Contribute" component={ContributeDetails}/>
        <Stack.Screen name="ContributeScreen" component={ContributeScreen2}/>
        <Stack.Screen name="InviteScreen1" component={InviteScreen}/>
        <Stack.Screen name="fixPlan" component={FixPlanScreen} />
        <Stack.Screen name="finalwithdrawal" component={FinalWithdrawal} />
        <Stack.Screen name="airtime" component={AirtimeTopupScreen} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
        <Stack.Screen name="BetAccount" component={BetAccount} />
        <Stack.Screen name="contributionActive" component={Contribution_Active} />
        <Stack.Screen name="groupDetails" component={Group_Details} />
        <Stack.Screen name="investment" component={Investment} />
        <Stack.Screen name="Resetpassword" component={ResetPassword} />
        <Stack.Screen name="Setting" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
