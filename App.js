
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './contexts/userContext';

import Routes from './src/routes';
// import Login from './src/screens/Login_Cad/login';

export default function App() {
  
  return (
    <UserProvider>
      <NavigationContainer>
        {/* {isAuthenticated ? ( */}
          <Routes />
        {/* ) : ( */}
          {/* <Login onLoginSuccess={handleLoginSuccess} /> */}
        {/* )}           */}
      </NavigationContainer>
    </UserProvider>
  );
}

