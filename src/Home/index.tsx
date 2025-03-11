import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../colors/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import EmptyTask from '../../components/EmptyTask';
import Task from '../../components/Task';
import { useState } from 'react';

export default function Home() {
  const [loaded, error] = useFonts({
    'Inter_regular': require('../../assets/fonts/Inter/static/Inter_18pt-Regular.ttf'),
    'Inter_bold': require('../../assets/fonts/Inter/static/Inter_18pt-Bold.ttf'),
  });

  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const [countConcluida, setCountConcluida] = useState<number>(0)


  /* Adicionar Task */
  const addTask = () => {


    if (tasks.includes(taskDescription)) {
      return Alert.alert(" Tarefa semelhante adicionada, acrescenta ou reduzi algo!")
    }

    //console.log("tasks", tasks)
    setTasks(prev => [...prev, taskDescription])
    setTaskDescription('')
    setCount(count + 1);
  }

  /* Remover Task */
  const handleRemoveTask = (name: string) => {
    //console.log("Clicou")
    //setTasks(prev => prev.filter(task => task !== name))
    

    Alert.alert("Remover", `Deseja Remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prev => prev.filter(task => task !== name))
          if (count >= 0) {
            setCount(count - 1)
          }
      
          if (completedTasks.includes(name)) {
            if (countConcluida >= 0) {
              setCountConcluida(countConcluida - 1)
            }
          }
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }


  /* Check Task */

  const handleCheckTask = (name: string) => {

    if (completedTasks.includes(name)) {
      setCompletedTasks(prev => prev.filter(task => task !== name))
      setCountConcluida(countConcluida + 1)
    } else {
      setCompletedTasks(prev => [...prev, name])
      setCountConcluida(countConcluida + 1)
    }
  }


  /* Counter */





  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

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

            <Input
              value={taskDescription}
              onchangeText={setTaskDescription}
            />

            <Button onPress={addTask} />

          </View>


        </View>

        <View style={styles.content}>

          <View style={styles.contentCount}>
            <View style={styles.contentCountElement}>
              <Text style={styles.contentCountElementText}> Criadas </Text>
              <TouchableOpacity style={styles.contentCountElementButton}>
                <Text style={styles.contentCountElementTextNumber}>{count}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentCountElement}>
              <Text style={styles.contentCountElementTextConcluido}> Concluídas </Text>
              <TouchableOpacity style={styles.contentCountElementButton}>
                <Text style={styles.contentCountElementTextNumber}>{countConcluida}</Text>
              </TouchableOpacity>
            </View>

          </View>


          <FlatList
            data={tasks}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            renderItem={(item) =>

              <Task
                key={item.item}
                title={item.item}
                onRemove={() => handleRemoveTask(item.item)}
                onChecked={() => handleCheckTask(item.item)}
                checked={completedTasks.includes(item.item) ? true : false}
              />

            }
            ListEmptyComponent={() => (<EmptyTask />)}
          />


        </View>

      </View>
    </>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


