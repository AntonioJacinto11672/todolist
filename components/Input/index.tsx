import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Input() {
  return (
    <TextInput
      style={styles.input}
      placeholder='Adicione uma nova Tarefa'
      placeholderTextColor={"#6B6B6B"}
    />
  )
}