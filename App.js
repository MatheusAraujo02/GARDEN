import { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import Login from './src/screens/Login_Cad/login';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Define como autenticado após login
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Routes />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
        
    </NavigationContainer>
  );
}

