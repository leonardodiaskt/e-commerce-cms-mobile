import { KeyboardAvoidingView, ScrollView, View} from "react-native";

import NavbarTwo from "./Navbar/navbarTwo";

export default function HomeTwo() {
  return (
    <View style={{ paddingVertical: 25 }}>
      <KeyboardAvoidingView>
        <ScrollView>
          <NavbarTwo />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
