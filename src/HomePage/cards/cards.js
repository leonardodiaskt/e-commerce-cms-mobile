import { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { Card } from "react-native-paper";

const numColumns = 2;

export default function Cards({content, navigation}) {



  return (
    <>
      <View style={{position: "absolute",left: 0,right: 0,top: 220,flex: 1,alignSelf: "stretch",}}>
        {console.log(content)}
        <ScrollView style={styles.scrollview}>
          <FlatList
            data={content}
            numColumns={numColumns}
            ListFooterComponent={<ActivityIndicator/>}
            renderItem={({ item }) => (
              <View style={styles.cards}>
                <View style={styles.body}>
                  <View style={styles.cardSneakers}>
                    <Card.Cover
                      style={styles.card_Actions}
                      source={{uri:`https://crud-node-senai.herokuapp.com/files/${item.nameImage}`}}
                    />
                    <Card.Actions style={styles.buttons}>
                      <TouchableOpacity style={styles.buttonComprar} onPress={() => navigation.navigate("HomeTwo")}>
                        <Text style={{color: '#fff', fontWeight: 500}}>Comprar</Text>
                      </TouchableOpacity>
                    </Card.Actions>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.idProduct}
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card_Actions: {
    width: 170,
    height: 170,
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: "transparent",
  },
  cards: {
    flexDirection: "row",
  },
  cardSneakers: {
    backgroundColor: "#D9D9D9",
    marginLeft: 20,
    marginTop: 20,

    width: 180,
    height: 180,
  },
  buttons: {
    margin: "auto",
    marginTop: -30,
  },
  buttonComprar: {
    backgroundColor: "#CB2C2C",
    color: "black",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

