import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../colors/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './style';


export default function Home() {
  const [loaded, error] = useFonts({    
    'Inter_regular': require('../../assets/fonts/Inter/static/Inter_18pt-Regular.ttf'),
    'Inter_bold': require('../../assets/fonts/Inter/static/Inter_18pt-Bold.ttf'),
  });

  return (
    <SafeAreaView style={{
      backgroundColor: colors.gray700,
      width: '100%',
    }}>
     <View style={styles.container}>

      {/* Logo */}
      <View style={styles.logo}>
      <Image
        source={
          require('../../assets/Logo.png')
        }
      />
      </View>

      <View style={styles.form}>
        <TextInput
        placeholder='Adicione uma nova tarefa'
        style={styles.input}
        />
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>

    </View>

   
    </SafeAreaView>
  );
}

