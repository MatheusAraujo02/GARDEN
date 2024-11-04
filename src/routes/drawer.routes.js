import { View, StyleSheet, Image  } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';

import TabRoutes from "./tab.routes";
import Config from "../screens/config/config";

const Drawer = createDrawerNavigator();

function CustomHeader() {
  return (
      <View style={styles.headerContainer}>
          <Image 
              source={require('../../assets/LogoGarden.png')} // Substitua pelo URL da sua imagem
              style={styles.logo}
              resizeMode="contain" // Ajusta a imagem para se manter dentro do espaço
          />
      </View>
  );
}

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor: 'darkgreen', 
            drawerInactiveTintColor: 'grey',
            headerTitle: () => <CustomHeader />,
            headerTitleAlign: "center",

        }
        }>
            <Drawer.Screen
                name='Inicio'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ focused, size,}) => <Feather name='home'  color={focused ? 'darkgreen' : 'grey' } size={ size }/>,
                    drawerLabel: 'Início',
            }}
            
            />
               <Drawer.Screen
                name='Config'
                component={Config}
                options={{
                    drawerIcon: ({ focused, size,}) => <Feather name='settings'  color={focused ? 'darkgreen' : 'grey' } size={ size }/>,
                    drawerLabel: 'Configurações',
            }}
            
            />
             {/* <Drawer.Screen
                name='MeuPerfil'
                component={MeuPerfil}
                options={{
                    drawerIcon: ({ focused, size,}) => <Feather name='settings'  color={focused ? 'darkgreen' : 'grey' } size={ size }/>,
                    drawerLabel: 'Meu Perfil',
            }}
             */}
            {/* /> */}
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
  headerContainer: {
      alignItems: 'center', // Centraliza a imagem
      justifyContent: 'center',
      height: 60, // Ajuste a altura conforme necessário
  },
  logo: {
      // width: 150, // Ajuste a largura conforme necessário
      // height: 40, // Ajuste a altura conforme necessário
      width: 150,
      height: 50,
      
  },
});