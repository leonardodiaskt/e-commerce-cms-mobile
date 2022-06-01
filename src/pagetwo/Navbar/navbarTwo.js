import React from "react";
import { StyleSheet, Text, TextInput , View, TouchableOpacity, Pressable  } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

export default function NavbarTwo(){
    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.buttonComprar} onPress={() => navigation.navigate("Homepage")}>
                    <Text style={styles.textBtn}>Home</Text>
                  </TouchableOpacity>
                <TextInput
                onChangeText={(inserir) => updateListProd(inserir)}
                style={styles.textInput}
                placeholder="Pesquisar"/> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo:{
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    nav: {
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    itemStyle: {
        padding: 15
    },
    textInput:{
        backgroundColor:'#fff',
        width: 173,
        height: 25,
        textAlign:"center",
        outline: 0,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textBtn:{
        color: '#fff'
    }
});