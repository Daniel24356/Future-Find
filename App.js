
import AppNavigator from './navigation/AppNavigator';
import Withdrawal from './screens/Withdrawal';
import HomeScreen from './screens/HomeScreen';
import ContributeDetails from './screens/ContributeDetails';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name = "Apply Loan" options = {{headerShown: false}}>
          {() => <LoanApplication/>}
          </Stack.Screen> */}
          <ContributeDetails/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

