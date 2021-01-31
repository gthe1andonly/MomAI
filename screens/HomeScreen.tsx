import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button, Card, Icon, Input, NavBar, Text } from 'galio-framework';
import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOM AI</Text>
      <Text>A wellness app desgined to make sure you're doing as well as mom hoped you would.</Text>
      <Text>This a HomeScreen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  