import { NavigationContainer } from '@react-navigation/native';
import Authentication from './screens/Authentification';
import NewUser from './screens/NewUser';
import Accueil from './screens/Accueil';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Auth" component={Authentication} />
    //     <Stack.Screen name="NewUser" component={NewUser} />
    //     <Stack.Screen name="Accueil" component={Accueil} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NewUser />
  );
}
