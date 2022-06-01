import { StyleSheet, View, Image } from "react-native";

export default function Carrousel() {
  return (
    <View>
      <Image
        style={styles.imgHome}
        source={require("../../../assets/imagem.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgHome: {
    width: "100%",
    height: 165,
  },
});
