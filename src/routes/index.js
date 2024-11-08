import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login_Cad/login';
import DrawerRoutes from './drawer.routes';
import { useAuth } from '../../contexts/userContext'; 
// import Cadastro from '../screens/Login_Cad/cadastro';

const Stack = createStackNavigator();

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {user} = useAuth();
  
  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Define como autenticado após login
  };  

  return ( 
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen 
        name="App" 
        component={DrawerRoutes} 
        options={{ headerShown: false }} 
        />
        ) : (
        <Stack.Screen 
          name="Login" 
          options={{ headerShown: false }} 
          >           
           {(props) => <Login {...props} onLoginSuccess={handleLoginSuccess} /> }
        </Stack.Screen>
          

        )}
          
          {/* <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} /> */}
          
    </Stack.Navigator>
  );
}

