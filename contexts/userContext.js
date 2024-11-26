import { createContext, useState, useEffect } from "react";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import api from "../src/services/api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [pacienteInfo, setPacienteInfo] = useState(null);
    const [error, setError] = useState(null)

    const logout = async () => {
        setPacienteInfo(null); //Limpa o estado `user`, o que indica que o usuário não está mais autenticado
        await AsyncStorage.removeItem('user'); // Remove os dados do AsyncStorage para efetuar o logout
    };

    const saveUserAsyncStorage = async (user) => {
      await AsyncStorage.setItem("user", JSON.stringify(user))
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

    const loginPaciente = async (email, password) => {
      try {
          const response = await api.post('/usuarios/loginPaciente', {
            usu_email: email,
            usu_senha: password
          });
          
          if (response.data.sucesso && response.data.dados.length > 0) { // Verifica se a resposta indica sucesso
              const pacDados = response.data.dados[0];             
              setPacienteInfo({
                  pac_id: pacDados.pac_id,
                  usu_id: pacDados.usu_id,
                  usu_nome: pacDados.usu_nome,
              });
              
              await saveUserAsyncStorage(pacDados);
              
              setError(null);
              return true;
          } else {
              setError(response.data.mensagem || "Erro no login");
              return false;
            }
          } catch (error) {
            setError("login e/ou senha incorretos!", error);
            return false;
          }
        };
        
        return (
  <UserContext.Provider value={{ pacienteInfo, loginPaciente, error, logout}}>
      {children}
  </UserContext.Provider>
)
};

export {UserContext, UserProvider}
  
