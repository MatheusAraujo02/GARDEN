import { createContext, useState, useContext, useEffect } from "react";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import api from "../src/services/api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [pacienteInfo, setPacienteInfo] = useState(null);
    const [error, setError] = useState(null)

    const logout = async () => {
        setUser(null); //Limpa o estado `user`, o que indica que o usuário não está mais autenticado
        await AsyncStorage.removeItem('user'); // Remove os dados do AsyncStorage para efetuar o logout
    };

    const saveUserAsyncStorage = user => {
      AsyncStorage.setItem("user", JSON.stringify(user))
    }


  useEffect(() => {
    const getPacInfo = async () => {
      try {
        const pacInfo = await AsyncStorage.getItem("user");
        
        if (pacInfo) {
          setPacienteInfo(JSON.parse(pacInfo));
        }
      } catch (error) {
        console.error("Erro ao recuperar informações do paciente:", error);
      }
    };

    getPacInfo(); // Chama a função assíncrona dentro do useEffect
  }, []);
  
    // useEffect(() =>{
    //   const pacInfo = AsyncStorage.getItem("user")
      
    //   if(pacInfo) setPacienteInfo(JSON.parse(pacInfo))
    //   }, [] )
    
    const fetchPacienteInfo = async () => {
      try {
              // Recupera o usuário logado do AsyncStorage
      // const storedUser = AsyncStorage.getItem("user");
      // if (!storedUser) return;

      // const { id: usu_id, psi_id } = JSON.parse(storedUser);

      const usu_id = 5 ;
      const pac_id = 19;
      // Faz a requisição com o id do usuário logado
      const usuarioResponse = await api.get(`/usuario/${usu_id}`);
      const pacienteResponse = await api.get(`/paciente/${pac_id}`);

      // Atualiza o estado com as informações combinadas do usuario e paciente
      setPacienteInfo({
        ...usuarioResponse.data.dados[0],
        ...pacienteResponse.data.dados[0],
      });
      } catch (error) {
        console.error("Erro ao buscar informações do paciente", error);
      }
    };

    const loginPaciente = async (email, password) => {
        try{
          const response = await api.post('/usuarios/loginPaciente', {usu,email: email, usu_senha: password});
          const [pacDados] = response.data.dados;
          
          setPacienteInfo({
            pac_id: pacDados.pac_id,
            usu_id: pacDados.usu_id,
            usu_nome: pacDados.usu_nome,
          })
          setError(null)
          saveUserAsyncStorage(pacDados)
          return true
        } catch(error){
          setError("login e/ou senha incorretos!")
          return false
        }
      }  
      // await AsyncStorage.setItem("user", JSON.stringify(pacienteInfo));
      


    return (
        <UserContext.Provider value={{ pacienteInfo, loginPaciente, error, logout}}>
            {children}
        </UserContext.Provider>
    )
};

export {UserContext, UserProvider}