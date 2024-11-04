import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      // marginLeft: 40,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    containerDiario: {  
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#233d2b',
      // padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: "26.3%",
      elevation: 3
    },
    titleDiario: { //"Diário"
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      // marginLeft: 10,
    },
    containerEmocao: {
      flexDirection: 'row',
      backgroundColor: '#233d2b',
      alignItems: 'center',
      // padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: '14%',
      elevation: 3
    },
    titleEmocao: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      // marginLeft: 10,
    },
    containerAtividades: {
      flexDirection: 'row',
      backgroundColor: '#233d2b',
      alignItems: 'center',
      // padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: '14%',
      elevation: 3
    },
    titleAtividades: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      // marginLeft: 10,
    },
    containerProxSessao: {
      flexDirection: 'row',
      backgroundColor: '#d9d9d9',
      alignItems: 'center',
      // padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: '14%',
      shadowColor: '#000',
      elevation: 5,
    },
    titleProxSessao: {
      padding: 2,
      marginLeft: 13,
      backgroundColor: 'green',
      color: '#000',
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginTop: -10,
      elevation: 3,
      flexWrap: 'wrap',
      height: '10'
    },
    titleData: {
      position: 'absolute',
      marginLeft: '18%',
      fontWeight: 'bold',
    },
  
  });

  export default styles;