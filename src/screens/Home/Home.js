import { Text, View, Image, Pressable } from 'react-native';

import styles from './home_styles';

import { Ionicons, Feather} from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
              
        <Pressable style={styles.containerDiario}
        onPress={() => navigation.navigate('Diario')}
        >  
                
          <Ionicons name='pencil' style={{ backgroundColor: 'green', borderRadius: 7, padding: 6, marginLeft: 26, fontSize: 30}}/> 
          
          <View style={{marginLeft: 15, }}>  
            <Text style={styles.titleDiario}>Diário</Text>
            <Text style={[styles.titleDiario, {fontSize: 15}]}>Como foi seu dia?</Text>
          </View>
            <Image source={require('../../../assets/MetadeCaderno.png')} style={{ justifyContent: 'flex-end', marginLeft: 'auto', height: '100%', borderTopRightRadius: 20, borderBottomRightRadius: 20,  }} />         
        </Pressable>
      
       
        <Pressable style={styles.containerEmocao}
          onPress={() => navigation.navigate('Emocao')}
        >
          <Feather name='smile' style={{ backgroundColor: '#0E920A', borderRadius: 7, padding: 6, marginLeft: 26, fontSize: 30,}}/>  
        
          <View style={{marginLeft: 15}}>         
            <Text style={styles.titleEmocao}>Emoção</Text>
            <Text style={[styles.titleEmocao, {fontSize: 16}]}>Defina sua emoção</Text>          
          </View>
            <Image source={require('../../../assets/FloresEmocoes.png')} style={{ justifyContent: 'flex-end', marginLeft: 'auto', height: '100%',  borderTopRightRadius: 20, borderBottomRightRadius: 20}} />
        </Pressable>

       
        <Pressable style={styles.containerAtividades}
        onPress={() => navigation.navigate('Atividade')}
        >
          <Ionicons name='book-outline' style={{ backgroundColor: '#0E920A', borderRadius: 7, padding: 6, marginLeft: 26, fontSize: 30,}}/>  
          
          <View style={{marginLeft: 15, }}>
            <Text style={styles.titleAtividades}>Atividades</Text>
            <Text style={[styles.titleAtividades, {fontSize: 16}]}>Conteúdos adicionais</Text>
          </View>
          <Image source={require('../../../assets/FloresAtividade.png')} style={{ justifyContent: 'flex-end', marginLeft: 'auto', height: '100%', borderTopRightRadius: 20, borderBottomRightRadius: 20}} />
        </Pressable>
    </View>
  );
}



