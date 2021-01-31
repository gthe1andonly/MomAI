import * as React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import {useState} from 'react';
import RNPickerSelect from "react-native-picker-select";
import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

export default function CheckInScreen() {

  return (
    

    <View style={styles.container}>
      <Text style={styles.title}>Annie are you ok? Are you ok annie?</Text>
      <Text>Insert questionare</Text>
      <View style={styles.separator} />

      <View style={styles.questionContainer}>

        <View style={styles.questions}><Text>Did you dring enough water today?</Text>
        {/* <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeStript", value: "TypeStript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             /> */}
        
        </View>

      </View>
      <EditScreenInfo path="/screens/CheckInScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    questionContainer:{
      display:'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
    },
    questions:{
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
    },
    questionText:{
      fontSize: 30,
    },
  });
  