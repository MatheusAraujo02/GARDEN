import { useState, useEffect} from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useAtividades } from './atividades_context';

// import { atividades } from '../../components/mocks/dados';
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

      const [atividades, setAtividades] = useState([]);
    // const { inicializarAtividades } = useAtividades();

    useEffect(() => {
      async function AtividadeMock(){
        try {
          const response = await api.get("/atividade");

          setAtividades(response.data.dados);
          inicializarAtividades(response.data.dados);
        } catch (error) {
          console.error("erro ao buscar atividade:", error);
          setAtividades([]);
        }
      }
        AtividadeMock();
    }, []);
    
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
            />
        </View>
        )
      };
      
  // useEffect(() => {
  //     const atividadeMock = [
  //         { ati_id: 1, ati_data: new Date().toLocaleString(), ati_descricao: 'Teste, esta é a atividade 1', },
  //         { ati_id: 2 , ati_data: new Date().toLocaleString(), ati_descricao: 'Teste, esta é a atividade 2', },
  //     ];
      
  //     setAtividades(atividadeMock);

// import { useNavigation } from '@react-navigation/native';
// 
//     const navigation = useNavigation();

//     useEffect(() => {
//         const atividadeMock = [ 
//             //Simulação da API
//             { id: '1', title: 'Atividade 1', content: 'Conteúdo completo da Atividade 1' },
//             { id: '2', title: 'Atividade 2', content: 'Conteúdo completo da Atividade 2' },
//         ];
//         setAtividades(atividadeMock);
//     }, []);

//     const renderAtividade = ({ item }) => (
//         <Pressable 
//         onPress={() => navigation.navigate('Detalhes', { atividade: item})}>
//             <Text> {item.title} </Text>
//         </Pressable>
//     );
//     return (
//         <View>
//             <FlatList 
//              data={atividades}
//              renderItem={renderAtividade}
//              keyExtractor={(item) => item.id}
//             />
//         </View>
//     )
// }
    
// const atvNavigation = () => {
//     return (
      
//     )    
// };