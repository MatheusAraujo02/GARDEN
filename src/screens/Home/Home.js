import { Text, View, Image, Pressable } from 'react-native';

import styles from './home_styles';

import { Ionicons, Feather} from '@expo/vector-icons';

const dia = 'Quinta-feira';
const hora = '19:47';
const dataNumero=  '03/09/2024';

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
        
          <View style={{marginLeft: 15, }}>         
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

        <View style={styles.containerProxSessao}>
          <Text style={styles.titleProxSessao}>Proxima sessão</Text>
          <Ionicons name='calendar-outline' style={{ fontSize: 35, color: '#0E920A', position: 'absolute', marginLeft: 25}}/>
          <Text style={ styles.titleData }> {dia} - {hora} </Text>
          <Text style={ [styles.titleData, { marginLeft: '70%'} ] }> {dataNumero} </Text>
        </View>
    </View>
  );
}

/* o padding do container estava fazendo a imagem nao chegar no final do container principal que é o retangulo verde escuro. 
Tirando ele e mexendo somendo no marginLeft do titulo e do emoticon deu pra fazer ela ficar no lugar certo
só falta testar em outros dispositivos 
  
*/

