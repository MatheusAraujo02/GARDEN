import { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Pressable, FlatList } from 'react-native'
import api from '../../services/api'
import { UserContext } from '../../../contexts/userContext'
import { useContext } from 'react'

import NoteDetails from './NoteDetails';
import AddNote from './AddNote';
import styles from './diario_styles';

const Stack = createStackNavigator();

export default function Diario() {

  return (
    <Stack.Navigator>
      <Stack.Screen name='ListaDeNotas' component={ListaDeNotas} options={{ title: 'Diário Emocional', headerTitleAlign: 'center' }} />
      <Stack.Screen name='NoteDetails' component={NoteDetails} options={{ title: 'Detalhes da Nota' }} />
      <Stack.Screen name='AddNote' component={AddNote} options={{ title: 'Adicionar nova nota' }} />
    </Stack.Navigator>
  )

}

const ListaDeNotas = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  const { pacienteInfo } = useContext(UserContext);

  useEffect(() => {
    if (pacienteInfo && pacienteInfo.pac_id){
      async function Notas() {
        try {
          const response = await api.get(`/diario/${pacienteInfo.pac_id}`);

          setNotes(response.data.dados);
        } catch (error) {
          console.error("erro ao buscar notas:", error);
        }
      }
      Notas();}
  })
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={item => item.dia_id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.noteItem}
            onPress={() => navigation.navigate('NoteDetails', { note: item })}
          >
            <Text style={styles.noteDate}>{new Date(item.dia_data).toLocaleDateString('pt-BR')}</Text>
            <Text style={styles.noteText}>{item.dia_relato.slice(0, 30)}...</Text>
          </Pressable>
        )}
      />
      <Pressable
        style={({ pressed }) => [{
          backgroundColor: pressed ? 'grey' : 'darkgreen',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }
        ]}
        onPress={() => navigation.navigate('AddNote')}
      >
        {({ pressed }) => (
          <Text style={{ color: pressed ? '#000' : '#fff', fontSize: 18, }}> Adicionar nota </Text>
        )}
      </Pressable>
    </View>
  );
};
