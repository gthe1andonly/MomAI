import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import EditScreenInfo from '../components/EditScreenInfo';
// import { Text } from '../components/Themed';

export default function ReminderScreen() {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you off your meds?</Text>
      <Text>Select items you want to be reminded of.</Text>
      <View style={styles.separator}/>
      <View style={styles.checkContainer}>
        <View style={styles.CheckItem}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox1}
          onValueChange={(newValue) => setToggleCheckBox1(newValue)}
        /><Text style={styles.checkText}>Excercise</Text>
        </View>

        <View style={styles.CheckItem}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox2}
          onValueChange={(val) => setToggleCheckBox2(val)}
        /><Text style={styles.checkText}>Bed Time</Text>
        </View>

        <View style={styles.CheckItem}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox3}
          onValueChange={(newValue) => setToggleCheckBox3(newValue)}
        /><Text style={styles.checkText}>Shower</Text>
        </View>

        <View style={styles.CheckItem}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox4}
          onValueChange={(newValue) => setToggleCheckBox4(newValue)}
        /><Text style={styles.checkText}>Food</Text>
        </View>

        <View style={styles.CheckItem}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox5}
          onValueChange={(newValue) => setToggleCheckBox5(newValue)}
        /><Text style={styles.checkText}>Water</Text>
        </View>

        <View style={styles.CheckItem}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox6}
          onValueChange={(newValue) => setToggleCheckBox6(newValue)}
        /><Text style={styles.checkText}>Homework</Text>
        </View>

      </View>
      <EditScreenInfo path="/screens/ReminderScreen.tsx" />
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
    checkContainer:{
      display:'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
    },
    CheckItem:{
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
    },
    checkText:{
      fontSize: 30,
    }
  });
  