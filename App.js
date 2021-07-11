import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.section_title}>Today's tasks</Text>

        <View style={styles.items}>
          {/* Tasks */}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>

        </View>
      </View>

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
  }

});
