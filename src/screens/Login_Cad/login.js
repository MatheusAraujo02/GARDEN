import { useContext, useState } from 'react';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Pressable, Alert } from 'react-native';
import styles from './login_styles';
import MyButton from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { UserContext  } from '../../../contexts/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = ({onLoginSuccess}) => {
//   const navigation = useNavigation();

//   const [usuario, setUsuario] = useState('');
//   const [senha, setSenha] = useState('');
//   const [isSenhaVisible, setIsSenhaVisible] = useState(false);


  function Login() {
    const navigation = useNavigation();
    const { loginPaciente, error} = useContext(UserContext);
    
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [isSenhaVisible, setIsSenhaVisible] = useState(false);

    async function handleSubmit() {
      if (!login || !senha) {
          Alert.alert("Por favor, preencha todos os campos.");
          return;
      }

      // Realiza o login com o contexto
      const isLoggedIn = await loginPaciente(login, senha); 
      
      if (isLoggedIn) {
          navigation.reset({
              index: 0,
              routes: [{ name: 'App' }]
          });
      } else {
          Alert.alert("Erro", error || "Falha ao realizar login");
      }
  }
  return (
    <View> 
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent={false} />
      <ImageBackground style={styles.img} source={require("../../../assets/image21.png")}>
        <Text style={styles.title}>GARDEN</Text>

        <View style={styles.container}>
          <Text style={styles.cad}>Login</Text>
          <View style={styles.textForm}>
            <TextInput style={styles.inpTex} placeholder="Nome de usuário" onChangeText={setLogin} placeholderTextColor={'#fff'} />
            <View style={styles.olhoInput}>
              <TextInput placeholder="Senha" style={styles.inpTex} onChangeText={setSenha} placeholderTextColor={'#fff'} secureTextEntry={!isSenhaVisible} />
              <TouchableOpacity onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
                <Icon name={isSenhaVisible ? 'eye' : 'eye-slash'} size={20} color="#000" style={styles.iconInput} />
              </TouchableOpacity>
            </View>
          </View>

          <MyButton title="ENTRAR" onClick={handleSubmit} />

          <Text style={styles.links}>Esqueceu a senha?</Text>
        </View>
      </ImageBackground>
    </View>
  );
  }

    // async function handleSubmit() {

    //   if (!login || !senha) {
    //     Alert.alert("Por favor, preencha todos os campos.");
    //     return;
    //   }


    //   // await login_paciente();

    //   const is_loggedIn = await loginPaciente(login, senha); 
      
    //   if (is_loggedIn) {
    //     navigation.reset({
    //               index:0,
    //               routes: [{name: 'App'}]
    //             })
    //   }

    // async function logar() {
    //   try {
    //     const dados = {
    //       usu_email: login,
    //       usu_senha: senha,
    //     }
    //     const response = await api.post("/usuarios/loginPaciente", dados);

    //     if (response.data.sucesso === true) {
    //       const usuario = response.data.dados;
    //       const objLogado = {
    //         id: usuario.usu_id,
    //         nome: usuario.usu_nome,
    //         acesso: usuario.usu_adm,
    //       };
    //      await AsyncStorage.clear();
    //      await AsyncStorage.setItem("user", JSON.stringify(objLogado));

    //       navigation.reset({
    //         index:0,
    //         routes: [{name: 'App'}]
    //       });
    //     } else {
    //       Alert.alert("Erro: " + response.data.mensagem);
    //     }
    //   } catch (error) {
    //     if(error.response) {
    //       Alert.alert("Erro", `${error.response.data.mensagem}\n${error.response.data.dados}`);
    //     } else {
    //       Alert.alert("Erro inesperado. Tente novamente mais tarde.");
    //     }
    //   }
    // }


  
  // async function handleLogin() {
  //   try {
  //     const response = await api.post('/usuarios/loginPaciente', {
  //       usu_email: usuario,
  //       usu_senha: senha
  //     });

  //     if (response.data.sucesso) { // Ajuste conforme o retorno de sucesso da sua API
  //       onLoginSuccess(); // Chama a função para atualizar o estado de autenticação
  //       const pacienteInfo = {
  //         pac_id: response.data.dados.pac_id,
  //         usu_id: response.data.dados.usu_id,
  //         usu_nome: response.data.dados.usu_nome
  //       };
  //       console.log(usuario, usu_id, usu_nome, pac_id)
  //       await login(pacienteInfo);
  //       navigation.reset({
  //         index:0,
  //         routes: [{name: 'App'}]
  //       })
  //     } else {
  //       Alert.alert('Erro', 'Usuário ou senha inválidos.');
  //     }
  //     } catch (error) {
  //       console.log("Erro no login:", error);
  //       const errorMessage = error.response?.data?.mensagem || "Não foi possível realizar o login.";
  //       Alert.alert('Erro', errorMessage);
  //     }     
  //   // } catch (error) {
  //   //   console.log(error);
  //   //   Alert.alert('Erro', 'Não foi possível realizar o login.');
  //   // }
  // }



export default Login;
