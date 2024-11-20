import { useContext, useState } from 'react';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Alert } from 'react-native';
import styles from './login_styles';
import MyButton from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { UserContext  } from '../../../contexts/userContext';

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
            <TextInput style={[styles.inpTex, {marginBottom: 20}]} placeholder="Nome de usuário" onChangeText={setLogin} placeholderTextColor={'#fff'} />
            <View style={styles.olhoInput}>
              <TextInput placeholder="Senha" style={styles.inpTex} onChangeText={setSenha} placeholderTextColor={'#fff'} secureTextEntry={!isSenhaVisible} />
              <TouchableOpacity onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
                <Icon name={isSenhaVisible ? 'eye' : 'eye-slash'} size={20} color="#000" style={styles.iconInput} />
              </TouchableOpacity>
            </View>
          </View>

          <MyButton title="ENTRAR" onClick={handleSubmit} />

        </View>
      </ImageBackground>
    </View>
  );
  } 

export default Login;
