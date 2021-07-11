import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.section_title}>Today's tasks</Text>

        <View style={styles.items}>
          {/* Tasks */}
          {
            taskItems.map((item, index)=> {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task  text={item}/>
                </TouchableOpacity>
              )
            })
          }
          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/> */}

        </View>
      </View>

      {/* Write task section */}
      <KeyboardAvoidingView 
        behavior={Platform.os ==="ios" ? "padding" : "heigh"}
        style={styles.write_task_wrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.add_wrapper}>
            <Text style={styles.add_text}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8eaed',
  },
  wrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  section_title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop: 30
  },
  write_task_wrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: "80%",
  },
  add_wrapper:{
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  add_text:{}

});
