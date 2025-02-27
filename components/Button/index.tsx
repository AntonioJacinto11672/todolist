import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'



export default function Button() {
  return (
    <TouchableOpacity style={styles.button} >
    <Text style={styles.buttonText}>  <AntDesign name="pluscircleo" size={24}  /></Text>
  </TouchableOpacity>
  )
}