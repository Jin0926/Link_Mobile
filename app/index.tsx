import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Modal, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPath, setSelectedPath] = useState(null);

  const openModal = (path) => {
    setSelectedPath(path);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    if (selectedPath) {
      setModalVisible(false);
      router.push(selectedPath);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/rodin.jpg")} style={styles.image} />
      <Text style={styles.title}>Hi! I am Rhodjien Caratao, and these are my friends.</Text>

      {[
        { name: "Alvin Paquibot", path: "/alvin" },
        { name: "Shaira Mae Ma-asin", path: "/shaira" },
        { name: "Harley Dave Chavez", path: "/harley" },
        { name: "Angel Khyla Marie Aboloc", path: "/angel" },
        { name: "Rolino Ongco", path: "/rolino" },
        { name: "Clien Cyrus Taneo", path: "/clien" },
      ].map((friend, index) => (
        <TouchableOpacity key={index} onPress={() => openModal(friend.path)}>
          <Text style={styles.link}>{index + 1}. {friend.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Modal for Confirmation */}
      <Modal
        animationType="none" // Instant appearance
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Do you wish to proceed?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleConfirm} style={[styles.button, styles.okButton]}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "red",
  },
  okButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
