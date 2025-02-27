import { NavigationContainer, StackActions } from '@react-navigation/native';
// import AppNavigator from './navigation/AppNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import LoanApplication from './screens/LoanApplication';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Apply Loan" options = {{headerShown: false}}>
          {() => <LoanApplication/>}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

