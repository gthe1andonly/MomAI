import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import CheckInScreen from '../screens/CheckInScreen';
import ReminderScreen from '../screens/ReminderScreen';
import LogisticsScreen from '../screens/LogisticsScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeParamList, LogisticsParamList, ReminderParamList, CheckInParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      /> */}
      <BottomTab.Screen
      name="Home"
      component={HomeScreenNavigator}
      options={{
        tabBarIcon:({color})=> <TabBarIcon name="ios-code" color={color}/>
      }}/>
      <BottomTab.Screen 
      name="Reminder"
      component={ReminderScreenNavigator}
      options={{
        tabBarIcon:({color})=><TabBarIcon name="ios-code" color={color}/>
      }}/>

      <BottomTab.Screen
      name="CheckIn"
      component={CheckInScreenNavigator}
      options={{
        tabBarIcon:({color})=> <TabBarIcon name="ios-code" color={color}/>
      }}/>
      <BottomTab.Screen
      name="Logistics"
      component={LogisticsScreenNavigator}
      options={{
        tabBarIcon:({color})=> <TabBarIcon name="ios-code" color={color}/>
      }}/>

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeScreenNavigator(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" 
      component={HomeScreen} 
      options={{headerTitle: "Welcome. This the mom at home."}}
      />
    </HomeStack.Navigator>
  );
}

const ReminderStack = createStackNavigator<ReminderParamList>();

function ReminderScreenNavigator(){
    return(<ReminderStack.Navigator>
      <ReminderStack.Screen name="ReminderScreen"
      component={ReminderScreen}
      options={{headerTitle:"Did you buy the GME???"}}
      />
    </ReminderStack.Navigator>
    );
}

const CheckInStack= createStackNavigator<CheckInParamList>();

function CheckInScreenNavigator(){
  return(<CheckInStack.Navigator>
    <CheckInStack.Screen name="CheckInScreen"
    component={CheckInScreen}
    options={{headerTitle:"Are you ok Annie?"}}
    />
  </CheckInStack.Navigator>
  );
}

const LogisticsStack = createStackNavigator<LogisticsParamList>();

function LogisticsScreenNavigator(){
  return (<LogisticsStack.Navigator>
    <LogisticsStack.Screen name="LogisticsScreen"
    component={LogisticsScreen}
    options={{headerTitle:"Numbers and stuff too."}}
    />
  </LogisticsStack.Navigator>
  );
}