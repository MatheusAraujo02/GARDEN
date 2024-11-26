import { useState, useEffect, useContext} from 'react';
import { View, Text, FlatList, Pressable, RefreshControl } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { UserContext } from '../../../contexts/userContext';
// import { RefreshControl } from 'react-native-gesture-handler';

import styles from './atividades_styles';
import Detalhes from './detalhesAtv';
import api from '../../services/api';


const Stack = createStackNavigator();

export default function Atividades() {
 
  return (
    <Stack.Navigator>
    <Stack.Screen name='ListarAtividades' component={ListarAtividades} options={{title: 'Atividades', headerTitleAlign: 'center'}} />       
   <Stack.Screen name='Detalhes' component={Detalhes} options={{title: 'Detalhes da Atividade', headerTitleAlign: 'center'}}/>       
  </Stack.Navigator>
)

}
    
    const ListarAtividades =({ navigation }) => {
      const { pacienteInfo } = useContext(UserContext);

      const [atividades, setAtividades] = useState([]);
      const [refreshing, setRefreshing] = useState(false);


      async function Atividades(){
        try {
          const response = await api.get(`/atividade_pac/${pacienteInfo.pac_id}`);

          setAtividades(response.data.dados);
        } catch (error) {
          console.error("erro ao buscar atividade:", error);
          setAtividades([]);
        }
      }
      useEffect(() => {
          Atividades();
      }, []);

      const onRefresh = async () => {
        setRefreshing(true);
        await Atividades();
        setRefreshing(false); 
      };
      
        return(
          <View style={styles.container}>
            <FlatList 
              data={atividades}
              keyExtractor={item => item.ati_id.toString()}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.atvItem}
                  onPress={() => navigation.navigate( 'Detalhes', {atividade: item})}
                  >
                  <Text style={styles.ati_data}>{new Date(item.ati_data).toLocaleDateString('pt-BR')}</Text>
                  <Text style={styles.ati_descricao}>{item.ati_descricao.slice(0,20)}...</Text>
                </Pressable>       
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              />
          </View>
          )
        };
        
  