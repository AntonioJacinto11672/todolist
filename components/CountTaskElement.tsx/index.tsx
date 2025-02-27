import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

type countTaskElementProps = {
    title: string,
    value: number
}
export default function CountTaskElement({title, value}: countTaskElementProps) {
  return (
    <View style={styles.contentCountElement}>
        <Text style={styles.contentCountElementText}> {title} </Text>
        <TouchableOpacity style={styles.contentCountElementButton}>
            <Text style={styles.contentCountElementTextNumber}> {value} </Text>
        </TouchableOpacity>
    </View>
  )
}