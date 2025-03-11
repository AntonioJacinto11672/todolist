import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'

interface buttonProps  {
  onPress: () => void
}

export default function Button(buttonProps: buttonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={buttonProps.onPress} >
    <Text style={styles.buttonText}>  <AntDesign name="pluscircleo" size={24}  /></Text>
  </TouchableOpacity>
  )
}