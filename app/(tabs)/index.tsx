import { View, Text, Image, Button, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const navigation = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hi, I am Rohan</Text>
      <Text style={styles.text2}>This is My Portfolio</Text>
      <Image
        style={styles.img}
        source={require("../../assets/images/rohan.jpeg")}
      />
      <Button
        style={styles.btn}
        title="Contact Me"
        onPress={() => navigation.push("/contact")}
      />
      <Button title="About Me" onPress={() => navigation.push("/about")} />
      <Button
        title="View Projects"
        onPress={() => navigation.push("/projects")}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    fontSize: 40,
    color: "blue",
  },
  text2: {
    fontSize: 20,
    color: "lightblue",
  },
  img: {
    height: 450,
    width: 300,
    marginBottom: 20,
    marginTop: 20,
  },
};
