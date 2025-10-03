import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.subText}>
        We’d love to hear from you! Feel free to reach out for any questions or
        feedback.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Email</Text>
        <Text style={styles.cardText}>support@example.com</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Phone</Text>
        <Text style={styles.cardText}>+1 234 567 890</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send a Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 15,
    color: "#666",
  },
  button: {
    marginTop: 25,
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
