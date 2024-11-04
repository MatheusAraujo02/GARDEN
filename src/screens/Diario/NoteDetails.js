import { ScrollView, View, Text, StyleSheet } from 'react-native';

const NoteDetails = ({ route }) => {
  const { note } = route.params;

  return (
    <ScrollView style={{  flexGrow: 1}}>
    <View style={styles.container}>
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