import { useState } from 'react';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Pressable, Alert } from 'react-native';
import styles from './login_styles';
import MyButton from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../contexts/userContext';

const Login = ({onLoginSuccess}) => {
  const navigation = useNavigation();

  const { login } = useAuth();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [isSenhaVisible, setIsSenhaVisible] = useState(false);

  async function handleLogin() {
    try {
      const response = await api.post('/usuarios/loginPaciente', {
        usu_email: usuario,
        usu_senha: senha
      });

      if (response.data.sucesso) { // Ajuste conforme o retorno de sucesso da sua API
        onLoginSuccess(); // Chama a função para atualizar o estado de autenticação
        const pacienteInfo = {
          pac_id: response.data.dados.pac_id,
          usu_id: response.data.dados.usu_id,
          usu_nome: response.data.dados.usu_nome
        };
        console.log(usuario, usu_id, usu_nome, pac_id)
        await login(pacienteInfo);
        navigation.reset({
          index:0,
          routes: [{name: 'App'}]
        })
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
      }
      } catch (error) {
        console.log("Erro no login:", error);
        const errorMessage = error.response?.data?.mensagem || "Não foi possível realizar o login.";
        Alert.alert('Erro', errorMessage);
      }     
    // } catch (error) {
    //   console.log(error);
    //   Alert.alert('Erro', 'Não foi possível realizar o login.');
    // }
  }

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
