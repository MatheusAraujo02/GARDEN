import { createContext, useState, useContext } from "react";
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const login = async (pacienteInfo) => {
        
        setUser(pacienteInfo);
        await AsyncStorage.setItem("user", JSON.stringify(pacienteInfo));
    };


    const logout = async () => {
        setUser(null); //Limpa o estado `user`, o que indica que o usuário não está mais autenticado
        await AsyncStorage.removeItem('user'); // Remove os dados do AsyncStorage para efetuar o logout
    };

    return (
        <UserContext.Provider value={{ user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => useContext(UserContext);