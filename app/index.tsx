import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Modal, TouchableOpacity } from "react-native";
import Toast from 'react-native-toast-message'; // Import Toast

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(''); // Track user input for name
  const [course, setCourse] = useState(''); // Track user input for course

  const handleProceed = () => {
    setModalVisible(true);  // Show the modal when the button is pressed
  };

  const handleConfirm = () => {
    // Check if name and course are defined before proceeding
    if (name && course) {
      console.log("Proceeding with the action");
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: `NAME: ${name}`,
        text2: `Course: ${course}`,
        visibilityTime: 3000, // Toast duration
      });  // Show toast with name and course
      setModalVisible(false);  // Close the modal after confirmation
    } else {
      console.log("Please enter both name and course");
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error',
        text2: 'Please enter both name and course',
        visibilityTime: 3000, // Toast duration
      });  // Show error toast
    }
  };

  const handleCancel = () => {
    console.log("Action cancelled");
    setModalVisible(false);  // Close the modal when the action is cancelled
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}  // Update the name state
      />

      <Text>Course:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter your course"
        value={course}
        onChangeText={(text) => setCourse(text)}  // Update the course state
      />

      <Button 
        title="Proceed"
        onPress={handleProceed}
      />

      {/* Modal for confirmation */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Do you want to proceed with the action?</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleConfirm}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Toast container for displaying messages */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
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
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  modalButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
