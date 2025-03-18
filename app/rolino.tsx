import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function rolino() {
  return (
        <View style={styles.container}>
          <Image source={require("../assets/images/rolino.jpg")} style={{width: 200, height: 200, borderRadius: 10}}/>
          <Text style={styles.name}>Rolino Ongco</Text>
          <Text>Course: Bachelor of Science in Information Technology</Text>
          <Text>Age: 21</Text>
          <Text>Number: 09267004421</Text>
    
        </View>
      )
    }
    
    const styles = StyleSheet.create ({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      },
      name: {
        fontSize: 20,
        fontWeight: "600",
      }
    })