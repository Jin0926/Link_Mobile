import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function shaira() {
  return (
        <View style={styles.container}>
          <Image source={require("../assets/images/shaira.jpg")} style={{width: 200, height: 200, borderRadius: 10}}/>
          <Text style={styles.name}>Shaira Mae Ma-asin</Text>
          <Text>Course: Bachelor of Science in Information Technology</Text>
          <Text>Age: 20</Text>
          <Text>Number: 09477651813</Text>
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