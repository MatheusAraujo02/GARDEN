// import { useEffect, useState } from "react";
// import { useNavigation } from '@react-navigation/native';
// import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Button, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
// import styles from "./cadastro_styles";
// import MyButton from "../../components/button";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import api from "../../services/api";

// export default function Cadastro() {
//   const navigation = useNavigation();  // Hook para acessar navegação

//   const [nome, setNome] = useState('');
//   const [usuario, setUsuario] = useState('');
//   const [email, setEmail] = useState('');
//   const [trabalho, setTrabalho] = useState('');
//   const [estCivil, setEstCivil] = useState('');
//   const [senha, setSenha] = useState('');
//   const [confirmar, setConfirmar] = useState('');
//   const [isSenhaVisible, setIsSenhaVisible] = useState(false);

//   function validateSenha(senha) {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//     return regex.test(senha);
//   }

//   function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   }

//   const handleRegister = async () => {
//     if (senha !== confirmar) {
//       Alert.alert('As senhas não coincidem!');
//       return;
//     }

//     if (!validateSenha(senha)) {
//       Alert.alert('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('O E-mail que você digitou não atende aos requisitos de segurança do email');
//       return;
//     }

//     try {
//       await api.post('/usuarios', { nome, usuario, email, trabalho, estCivil, senha });
//       Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
//       navigation.navigate('Login'); // Redireciona para a tela de Login após sucesso
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
//     }
//   };

//   return (
//     <View>
//       <StatusBar barStyle="light-content" backgroundColor="#000" translucent={false} />
//       <ImageBackground style={styles.img} source={require("../../../assets/image21.png")}>
//         <KeyboardAvoidingView behavior="padding" enabled>
//           <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//             <Text style={styles.title}>GARDEN</Text>

//             <View style={styles.container}>
//               <Text style={styles.cad}>Cadastre-se</Text>

//               <View style={styles.textForm}>
//                 <TextInput placeholder="Nome Completo" style={styles.inpTex} onChangeText={setNome} placeholderTextColor={'#fff'} />
//                 <TextInput placeholder="Nome de usuário" style={styles.inpTex} onChangeText={setUsuario} placeholderTextColor={'#fff'} />
//                 <TextInput placeholder="E-mail" style={styles.inpTex} onChangeText={setEmail} placeholderTextColor={'#fff'} />
//                 <TextInput placeholder="Profissão" style={styles.inpTex} onChangeText={setTrabalho} placeholderTextColor={'#fff'} />
//                 <TextInput placeholder="Estado Civil" style={styles.inpTex} onChangeText={setEstCivil} placeholderTextColor={'#fff'} />

//                 <View style={styles.olhoInput}>
//                   <TextInput placeholder="Senha" style={styles.inpTex} onChangeText={setSenha} placeholderTextColor={'#fff'} secureTextEntry={!isSenhaVisible} />
//                   <TouchableOpacity onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
//                     <Icon name={isSenhaVisible ? 'eye' : 'eye-slash'} size={20} color="#000" style={styles.iconInput} />
//                   </TouchableOpacity>
//                 </View>

//                 <View style={styles.olhoInput}>
//                   <TextInput placeholder="Confirmar senha" style={styles.inpTex} onChangeText={setConfirmar} placeholderTextColor={'#fff'} secureTextEntry={!isSenhaVisible} />
//                   <TouchableOpacity onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
//                     <Icon name={isSenhaVisible ? 'eye' : 'eye-slash'} size={20} color="#000" style={styles.iconInput} />
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               <MyButton title="CRIAR" onClick={handleRegister} />
//             </View>
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </View>
//   );
// }
