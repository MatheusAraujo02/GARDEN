import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";


const MyButton = ({title, onClick }) =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => onClick ()}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#074A05',
        justifyContent: 'center',
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        borderRadius: 25,
        width: 200,
        height: 51.17,
        marginTop: -50,
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default MyButton;