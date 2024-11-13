import { View, Button } from 'react-native';

import styles from './config_styles';
import { UserContext } from '../../../contexts/userContext';
import { useContext } from 'react';

export default function Config() {
    const { logout } = useContext(UserContext);
    return(
        <View style={ styles.container}>
            <Button 
            title='Desconectar'
            onPress={logout}
            >
            </Button>
        </View>
    )
}