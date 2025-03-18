import { Text, View, StyleSheet, Image } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.hello}
    >
      <Image source={require("../assets/images/rodin.jpg")} style={{width: 200, height: 200, borderRadius: 10}}/>
      <Text>Hi! I am Rhodjien Caratao, and these are my friends.</Text>
      <Link href={"/alvin"} style={styles.link}>1. Alvin Paquibot</Link>
      <Link href={"/shaira"} style={styles.link}>2. Shaira Mae Ma-asin</Link>
      <Link href={"/harley"} style={styles.link}>3. Harley Dave Chavez</Link>
      <Link href={"/angel"} style={styles.link}>4. Angel Khyla Marie Aboloc</Link>
      <Link href={"/rolino"} style={styles.link}>5. Rolino Ongco</Link>
      <Link href={"/clien"} style={styles.link}>6. Clien Cyrus Taneo</Link>
    </View>
  );
}

const styles = StyleSheet.create ({
  hello: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  link: {
    fontSize: 16,
    textDecorationLine: "underline",
    textDecorationColor: "blue",
  }
})