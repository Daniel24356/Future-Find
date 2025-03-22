import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import RepayLoan from '../screens/RepayLoan';
import ContributeDetails from '../screens/ContributeDetails';
import ContributeScreen2 from '../screens/ContributeScreen2';
import InviteScreen from '../screens/InviteScreen';
import ResetPassword from '../screens/ResetPassword';
import Settings from '../screens/Settings';
import Payments from '../screens/Payments';
import Investment from '../screens/Investment';
import FixPlanScreen from '../screens/FixplanScreen';
import FinalWithdrawal from '../screens/FinalWithdrawal';
import Notification from '../screens/Notification';
import Transaction from '../screens/Transaction';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileScreen from '../screens/profileScreen';
import Group_members from '../screens/Group_members';
import OTPScreen from '../screens/OTPScreen';
import BVNScreen from '../screens/BVNScreen';
import AirtimeTopupScreen from '../screens/AirtimeTopupScreen'
import Contribution_Active from '../screens/Contribution_Active';
import Group_Details from '../screens/Group_Details';
import Notifications from '../screens/Notifications';
import ElectricityTopupScreen from '../screens/ElectricityTopupScreen';
import DataTopupScreen from '../screens/DataTopup';
import Investments from '../screens/Investments';
import LoanApplication from '../screens/LoanApplication';
import Withdrawal from '../screens/Withdrawal';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer
    >
      <Stack.Navigator screenOptions={{ 
         headerShown: false,  
         animationEnabled: false,
         gestureEnabled: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="Signup" component={SignUpForm}  options={{ animation: "none" }}  />
      <Stack.Screen name="Transaction"component={Transaction}  options={{ animation: "none" }}  />
        <Stack.Screen name="Notifications" component={Notifications}  options={{ animation: "none" }}  />
        <Stack.Screen name="Investments" component={Investment}  options={{ animation: "none" }}  />
        <Stack.Screen name="Payment" component={Payments}  options={{ animation: "none" }}  />
      <Stack.Screen name='OTPScreen' component={OTPScreen}  options={{ animation: "none" }} />
      <Stack.Screen name='BVNScreen' component={BVNScreen}  options={{ animation: "none" }} />
        <Stack.Screen name="Resetpassword" component={ResetPassword}  options={{ animation: "none" }}  />
        <Stack.Screen name="Login" component={LoginScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="onboarding1" component={OnboardingScreen1}  options={{ animation: "none" }}  />
        <Stack.Screen name="onboarding2" component={OnboardingScreen2}  options={{ animation: "none" }}  />
        <Stack.Screen name="onboarding3" component={OnboardingScreen3}  options={{ animation: "none" }}  />
        <Stack.Screen name="home" component={HomeScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="loanLandingScreen" component={LoanLandingScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="Group_members" component={Group_members}  options={{ animation: "none" }}  />   
        <Stack.Screen name="profile" component={ProfileScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="EditProfile" component={EditProfileScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="repayLoan" component={RepayLoan}  options={{ animation: "none" }}  />
        <Stack.Screen name="Contribute" component={ContributeDetails}  options={{ animation: "none" }} />
        <Stack.Screen name="ContributeScreen" component={ContributeScreen2}  options={{ animation: "none" }} />
        <Stack.Screen name="InviteScreen1" component={InviteScreen}  options={{ animation: "none" }} />
        <Stack.Screen name="fixPlan" component={FixPlanScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="finalwithdrawal" component={FinalWithdrawal}  options={{ animation: "none" }}  />
        <Stack.Screen name="withdrawalPage" component={Withdrawal}  options={{ animation: "none" }}  />
        <Stack.Screen name="airtime" component={AirtimeTopupScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails}  options={{ animation: "none" }}  />
        <Stack.Screen name="BetAccount" component={BetAccount}  options={{ animation: "none" }}  />
        <Stack.Screen name="contributionActive" component={Contribution_Active}  options={{ animation: "none" }}  />
        <Stack.Screen name="groupDetails" component={Group_Details}  options={{ animation: "none" }}  />
        <Stack.Screen name="investment" component={Investments}  options={{ animation: "none" }}  />
        <Stack.Screen name="Setting" component={Settings}  options={{ animation: "none" }}  />
        <Stack.Screen name="Notification" component={Notification}  options={{ animation: "none" }}  />
        <Stack.Screen name="electricity" component={ElectricityTopupScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="data" component={DataTopupScreen}  options={{ animation: "none" }}  />
        <Stack.Screen name="loan" component={LoanApplication}  options={{ animation: "none" }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
