import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Training from './screens/Training';
import Custom from './screens/Custom';
import Report from './screens/Report';
import NewWorkout from './screens/NewWorkout';
import SessionBuilder from './screens/SessionBuilder';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Training" component={Training} />
        <Stack.Screen name="Custom" component={Custom} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="NewWorkout" component={NewWorkout} />
        <Stack.Screen name="SessionBuilder" component={SessionBuilder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
