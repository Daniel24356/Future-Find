
import AppNavigator from './navigation/AppNavigator';
import Withdrawal from './screens/Withdrawal';
import Investment from './screens/Investment';
import Contribution_Active from './screens/Contribution_Active';
import HomeScreen from './screens/HomeScreen';
import PopUpScreen from './props/PopUpScreen';
import Group_Details from './screens/Group_Details';
import VerificationPopup from './props/VerificationPopup';
import FilterPopup from './screens/FilterPopup';

export default function App() {
  // return <AppNavigator/>
  return <FilterPopup/>
}

