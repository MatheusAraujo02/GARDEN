import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/login';
import DrawerRoutes from './drawer.routes';
import { UserContext } from '../../contexts/userContext';


const Stack = createStackNavigator();

export default function Routes() {
  const { pacienteInfo } = useContext(UserContext);

  return ( 
    <Stack.Navigator>
      {pacienteInfo ? (
        <Stack.Screen 
        name="App" 
        component={DrawerRoutes} 
        options={{ headerShown: false }} 
        />
        ) : (
        <Stack.Screen 
          name="Login" 
          options={{ headerShown: false }} 
          component={Login}
          />           
        )}
          
    </Stack.Navigator>
  );
}

