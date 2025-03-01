
import AppNavigator from './navigation/AppNavigator';
import Withdrawal from './screens/Withdrawal';
import HomeScreen from './screens/HomeScreen';
import ContributeDetails from './screens/ContributeDetails';
import { NavigationContainer } from '@react-navigation/native';
import LoanApplication from './screens/LoanApplication';
import ContributeScreen2 from './screens/ContributeScreen2';

export default function App() {
  return (
    <NavigationContainer>
         {/* <LoanApplication/> */}
          {/* <ContributeDetails/> */}
          <ContributeScreen2/>
    </NavigationContainer>
  )
}

