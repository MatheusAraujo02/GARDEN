import { useState} from 'react'
import { View, TextInput, StyleSheet, Pressable, Text, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import api from '../../services/api';

const AddNote = ({ navigation }) => {
  const [newNote, setNewNote] = useState('');

  const handleSalvarNota = async () => {
    if (!newNote.trim()) {
      Alert.alert('Erro', 'A nota não pode estar vazia!');
      return;
    }

    try {
      await api.post('/diario', {
        pac_id: 11,
        dia_relato: newNote,
        dia_data: new Date(),
      });

      setNewNote('');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar nota', error);
      Alert.alert('Erro', 'Houve um erro ao salvar a nota. Tente novamente');
    }
  }
      
 

  return (
  <KeyboardAvoidingView 
    style={{ flex: 1}}
    behavior={Platform.OS === 'ios' ? 'height' : ''} 
    keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
  >  
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Escreva sua nova nota aqui..."
        value={newNote}
        onChangeText={setNewNote}
      />
      <Pressable 
        style={({ pressed }) => [{
          backgroundColor: pressed ? 'grey' : 'darkgreen',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }
        ]}
        onPress={handleSalvarNota}
      >  
        {({ pressed}) => (
          <Text style={{color: pressed ? '#000' : '#fff', fontSize: 18, }}> Salvar nota </Text>
)}

      </Pressable>
    </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    textAlignVertical: 'top',
    marginBottom: 8
  },
});

export default AddNote;

  // const handleSave = () => {
  //     navigation.goBack(); // Voltar para a lista de notas
  // };