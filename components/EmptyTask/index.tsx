import { View, Text, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'
import colors from '../../colors/color'

export default function EmptyTask() {
  return (
    <View style={styles.contentEmpty}>
        {/* <MaterialCommunityIcons name="clipboard-text-outline" size={56} color="gray" /> */}
        <Image source={require("../../assets/Clipboard.png")} />
        <Text style={{fontSize: 14, fontWeight: "medium", color: colors.gray300}}>Você ainda não tem tarefas cadastradas </Text>
        <Text style={{fontSize: 14, fontWeight: "medium", color: colors.gray300}}>Crie tarefa e organize seus itens a fazer</Text>
    </View>
  )
}