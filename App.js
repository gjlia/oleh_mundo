import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//paginas
import Home from './src/pages/home';
import Rest from './src/pages/rest';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Rest" component={Rest}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}