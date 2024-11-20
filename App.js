
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './contexts/userContext';

import Routes from './src/routes';

export default function App() {
  
  return (
    <UserProvider>
      <NavigationContainer>
          <Routes />
      </NavigationContainer>
    </UserProvider>
  );
}

