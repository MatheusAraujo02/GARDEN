import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home/Home';
import Diario from '../screens/Diario/Diario';
import Emocao from '../screens/Emocao/Emocao';
import Atividades from '../screens/Atividades/atividades';
// import { useAtividades } from '../screens/Atividades/atividades_context';

const Tab = createBottomTabNavigator();


export default function TabRoutes() {
    // const { atividadesLidas } = useAtividades();

    // const atividadesNaoLidas = Object.values(atividadesLidas || {}).filter((lida) => !lida).length;
   
    return (
        <Tab.Navigator screenOptions={ {
            headerShown: false,
            tabBarActiveTintColor: 'darkgreen',
            tabBarInactiveTintColor: 'grey' 
            }}
        >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon: ({ focused, size}) => (<Feather name= 'home'  color={focused ? 'darkgreen' : 'grey' } size={ size }/>),
                tabBarLabel: 'Início',
               
            }}
        />

        <Tab.Screen
            name='Diario'
            component={Diario}
            options={{
                tabBarIcon: ({ focused, size}) => (<Feather name='book' color={ focused ? 'darkgreen' : 'grey'  } size={ size }/>),
                tabBarLabel: 'Diário',
            }}
        />

        <Tab.Screen
            name='Emocao'
            component={Emocao}
            options={{
                tabBarIcon: ({ focused, size}) => (<Feather name='smile' color={ focused ? 'darkgreen' : 'grey'  } size={ size }/>),
                tabBarLabel: 'Emoção'
            }}
        />

        <Tab.Screen
            name='Atividade'
            component={Atividades}
            options={{
                tabBarIcon: ({ focused, size}) => (<Ionicons name='book-outline' color={ focused ? 'darkgreen' : 'grey'  } size={ size }/>),
                tabBarLabel: 'Atividades',

            }}
        />
        </Tab.Navigator>
    )
}

// parei aqui tentando colocar cor no texto dos botoes
