import { useState } from 'react';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Pressable, Alert } from 'react-native';
import styles from './login_styles';
import MyButton from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

// const mockApiPost = async (url, data) => {
//   // Simula o comportamento da API com base no valor de `data`
//   if (data.usuario === 'Teste' && data.senha === '123') {
//     return { data: { success: true } }; // Mock de resposta de sucesso
//   } else if (data.usuario === 'usuario_teste' && data.senha === 'senha_errada') {
//     return { data: { success: false } }; // Mock de falha de autenticação
//   } else {
//     throw new Error('Erro de rede'); // Mock de erro de rede
//   }
// };

const Login = ({ onLoginSuccess }) => {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [isSenhaVisible, setIsSenhaVisible] = useState(false);

  async function handleLogin() {
    try {
      const response = await api.post('/usuarios/login', {
        usuario,
        senha
      });

      if (response.data.success) { // Ajuste conforme o retorno de sucesso da sua API
        onLoginSuccess(); // Chama a função para atualizar o estado de autenticação
        navigation.reset({
          index:0,
          routes: [{name: 'App'}]
        })
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível realizar o login.');
    }
  }
  // async function handleLogin() {
  //   try {
  //     // Substitua a chamada original pela função mock
  //     const response = await mockApiPost('/usuarios/login', { usuario, senha });

  //     if (response.data.success) {
  //       onLoginSuccess(); // Chama a função para atualizar o estado de autenticação
  //       navigation.reset({
  //         index:0,
  //         routes: [{name: 'App'}]
  //       })
  //     } else {
  //       Alert.alert('Erro', 'Usuário ou senha inválidos.');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert('Erro', 'Não foi possível realizar o login.');
  //   }
  // }

  return (
    <View> 
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent={false} />
      <ImageBackground style={styles.img} source={require("../../../assets/image21.png")}>
        <Text style={styles.title}>GARDEN</Text>

        <View style={styles.container}>
          <Text style={styles.cad}>Login</Text>
          <View style={styles.textForm}>
            <TextInput style={styles.inpTex} placeholder="Nome de usuário" onChangeText={setUsuario} placeholderTextColor={'#fff'} />
            <View style={styles.olhoInput}>
              <TextInput placeholder="Senha" style={styles.inpTex} onChangeText={setSenha} placeholderTextColor={'#fff'} secureTextEntry={!isSenhaVisible} />
              <TouchableOpacity onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
                <Icon name={isSenhaVisible ? 'eye' : 'eye-slash'} size={20} color="#000" style={styles.iconInput} />
              </TouchableOpacity>
            </View>
          </View>

          <MyButton title="ENTRAR" onClick={handleLogin} />

          <Text style={styles.links}>Esqueceu a senha?</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
