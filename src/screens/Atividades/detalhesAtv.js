import { View, Text, StyleSheet, ScrollView} from 'react-native';


 const Detalhes = ({ route }) => {
    const { atividade } = route.params || {};


    return (
      <ScrollView style={{  flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>{atividade.ati_descricao}</Text>  
      </View>
      </ScrollView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      text: {
        height: '90%',
        fontSize: 16,
        color: '#333',
      },
  });

export default Detalhes;

