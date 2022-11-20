import React from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export const ButtonApp = ({handleClick}) => {
  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#0ea5e9',
      borderRadius: 10,
      margin: 10,
      elevation: 20,
      shadowColor: '#e90ede',
      shadowOffset: {
        width: 2,
        height: 4
      },
      shadowOpacity: '0.5',
      shadowRadius: 10
    },
    button_text: {
      color: '#ffffff',
      fontSize: 18
    }
  })

  return (
    <TouchableOpacity onPress={handleClick} style={styles.button}>
      <Text style={styles.button_text}>
        Show toast message
      </Text>
    </TouchableOpacity>
  )
}