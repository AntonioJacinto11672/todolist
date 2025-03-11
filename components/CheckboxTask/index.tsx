import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CheckboxTask() {
  return (
    <View>
      <Text>
        <AntDesign name="checkcircleo" size={24} color="black" />
      </Text>
    </View>
  )
}