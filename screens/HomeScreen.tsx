import * as React from 'react';
import { StyleSheet, Button, Text, SafeAreaView, View} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOM AI</Text>
      <Text>A wellness app desgined to make sure you're doing as well as mom hoped you would.</Text>
      
      <Button
      onPress={()=>null}
      title="Get Started"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      <View style={styles.separator}/>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
  });
  