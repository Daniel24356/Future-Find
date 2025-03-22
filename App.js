import SavingsPlanScreen from "./screens/SavingsPlanScreen";
import AppNavigator from './navigation/AppNavigator';
import Withdrawal from './screens/Withdrawal';
import Investment from './screens/Investment';
import Contribution_Active from './screens/Contribution_Active';
import HomeScreen from './screens/HomeScreen';
import ResetPassword from './screens/ResetPassword';
import Settings from './screens/Settings';
import Payments from './screens/Payments';
import Notification from './screens/Notification';
import Transaction from './screens/Transaction';
import ProfileScreen from './screens/profileScreen';
import Group_members from './screens/Group_members';
import PopUpScreen from './props/PopUpScreen';
import Group_Details from './screens/Group_Details';
import VerificationPopup from './props/VerificationPopup';
import FilterPopup from './screens/FilterPopup';
import ConfirmPaymentPopup from './props/ConfirmPaymentPopup';
import { NavigationContainer } from "@react-navigation/native";
import ContributeDetails from "./screens/ContributeDetails";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <AppNavigator/>;
  
  // return <NavigationContainer>
    {/*  <LoginScreen/> */}
  // <Contribution_Active/>
  {/* <ContributeDetails/> */}
  {/* <Group_members/> */}
  {/* </NavigationContainer> */}
}
