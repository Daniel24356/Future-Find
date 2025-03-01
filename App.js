
import AppNavigator from './navigation/AppNavigator';
import Withdrawal from './screens/Withdrawal';
import HomeScreen from './screens/HomeScreen';
import ContributeDetails from './screens/ContributeDetails';
import { NavigationContainer } from '@react-navigation/native';
import LoanApplication from './screens/LoanApplication';

export default function App() {
  return (
    <NavigationContainer>
         {/* <LoanApplication/> */}
          <ContributeDetails/>
    </NavigationContainer>
  )
}

