import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login_Cad/login';
// import Cadastro from '../screens/Login_Cad/cadastro';
import DrawerRoutes from './drawer.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} /> */}
      <Stack.Screen name="App" component={DrawerRoutes} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

