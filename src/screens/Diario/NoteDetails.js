import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const NoteDetails = ({ route }) => {
  const { note } = route.params;
  const navigation = useNavigation();

   async function apagarDiario(){
    try {
      const response = await api.delete(`/diario/${note.dia_id}`);

      if(response.data.sucesso == true) {
        navigation.goBack()
      } 
    } catch (error) {
      console.error("erro ao apagar diario:", error);
    }
  }

  return (
    <ScrollView style={{  flexGrow: 1}}>
      <Pressable
      style={{
        backgroundColor: 'darkred',
        padding: 5,
        borderRadius: 5,
        width: 50,
        height: 35,
      }}
      onPress={() => apagarDiario()}>
        <Text
         style={{
          fontWeight: 'bold',
          color: 'white',
          alignContent: 'center',
        }}>Apagar</Text>
      </Pressable>
      <View style={styles.container} >
        <Text style={styles.dateText}>{new Date(note.dia_data).toLocaleDateString('pt-BR')}</Text>
        <Text style={styles.noteText}>{note.dia_relato}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    dateText: {
      fontSize: 12,
      color: '#888',
    },
    noteText: {
      fontSize: 18,
      marginTop: 10,
    },
  });

export default NoteDetails;