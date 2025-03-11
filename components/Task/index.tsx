import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CheckboxTask from '../CheckboxTask'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './style'
import colors from '../../colors/color'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type taskProps = {
  checked?: boolean,
  title: string,
  deleted?: boolean,
  onChecked?: () => void
  onUnChacked?: () => void,
  onRemove?: () => void
}


export default function Task( {checked, title, deleted, onChecked, onUnChacked,onRemove}: taskProps) {

  return (
    <View style={styles.container}>
      {/* Ckeckbox */}
      <View>

       {
        checked ?
          <TouchableOpacity style={{
          backgroundColor: colors.purpleDark,
          borderRadius: 100,
          borderColor: colors.purpleDark,
          borderWidth: 1,
          padding: 2
         }}  onPress={onUnChacked}>
          {/* Quando estiver checkado */}
         <Ionicons name="checkmark" size={15} color={colors.gray100}  />
      </TouchableOpacity>
      :
        <TouchableOpacity  onPress={onChecked}>
          {/* Quando não estiver checado */}
      <FontAwesome name="circle-o" size={24} color={colors.purpleDark}  />
  </TouchableOpacity>
       }
      

       


      </View>
      {/* Content */}
      <View style={styles.taskContent}>
          <Text style={{color: colors.gray100, textDecorationLine: checked ? "line-through" : 'none'}}> {title} </Text>
      </View>
      {/* Delete botton */}
      <View>
        <TouchableOpacity onPress={onRemove}>
           <AntDesign name='delete' size={20} color={colors.gray300} />
        </TouchableOpacity>
      </View>
    </View>
  )
}