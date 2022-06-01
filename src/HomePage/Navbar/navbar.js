import React from "react";
import { StyleSheet, Text, TextInput , View} from "react-native";



export default function Navbar({state, changeState}){

    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <Text style={styles.logo}>Logo</Text>
                <TextInput
                value={state}
                onChangeText={(text) => changeState(text)}
                style={{backgroundColor: '#fff', width: 173, height: 25, textAlign: "center", outline: 0, alignItems: 'flex-end', justifyContent: 'center'}}
                placeholder="Pesquisar"/> 
            </View>
        </View>
    );
}

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
});