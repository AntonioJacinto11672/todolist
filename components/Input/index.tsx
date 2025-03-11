import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

type InputType = {
  value?: string | undefined,
  onchangeText?: ((text: string) => void) | undefined 
}
export default function Input({value, onchangeText}: InputType) {
  return (
    <TextInput
      style={styles.input}
      placeholder='Adicione uma nova Tarefa'
      placeholderTextColor={"#6B6B6B"}
      onChangeText={onchangeText}
      value={value}
    />
  )
}