import { View, Text } from 'react-native';

import styles from './config_styles';

export default function Config() {
    return(
        <View style={ styles.container}>
            <Text style={ styles.title }>Configurações</Text> 
        </View>
    )
}