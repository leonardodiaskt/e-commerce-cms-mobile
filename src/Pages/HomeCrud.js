import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";

import Navbar from "../HomePage/Navbar/navbar";
import Carrousel from "../HomePage/ImageCarrousel/carrousel";
import Cards from "../HomePage/cards/cards";

import axios from "axios";

export default function HomeCrud({navigation}) {
  const [search, setSearch] = useState("");
  const [content, setContent] = useState();

  useEffect(()=>{
    axios.get(`https://crud-node-senai.herokuapp.com/searchbar?name=${search}&code=${search}`)
    .then(({data})=>setContent(data.rows))
  },[search]);
 useEffect(()=>{
  if(search === ""){
   axios.get("https://crud-node-senai.herokuapp.com/all")
   .then(({data})=>setContent(data))  
  }
 },[search]);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{}}>

        <Navbar state={search} changeState={setSearch} />
        <Carrousel />
        <Cards content={content} navigation={navigation}/>
        
      </View>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
    // <Rotas/>
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
