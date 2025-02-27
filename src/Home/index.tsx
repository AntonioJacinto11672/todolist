import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../colors/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CountTaskElement from '../../components/CountTaskElement.tsx';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EmptyTask from '../../components/EmptyTask';
import Task from '../../components/Task';

export default function Home() {
  const [loaded, error] = useFonts({    
    'Inter_regular': require('../../assets/fonts/Inter/static/Inter_18pt-Regular.ttf'),
    'Inter_bold': require('../../assets/fonts/Inter/static/Inter_18pt-Bold.ttf'),
  });

  return (
    <>
      <View style={styles.main}>
        <View style={styles.header}>
        <View style={styles.logo}>
            {/* Logo */}
              <Image
              source={
                require('../../assets/Logo.png')
              }
            />
        </View>

          <View style={styles.form}>
          
            <Input />

            <Button />

          </View>


        </View>

        <View style={styles.content}>
          
          <View style={styles.contentCount}>
            <CountTaskElement title='Criada' value={0}/>
            <CountTaskElement  title='Concluídas' value={0}/>
          </View>

          {/* <EmptyTask /> */}

          <Task />

        </View>
       
      </View>
    </>
  );
}

