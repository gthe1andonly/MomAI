import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Home:{
            screens:{
              HomeScreen: 'Home',
            },
          },
          Logistics:{
            screens:{
              LogisticsScreen: 'Logistics',
            },
          },
          Reminder:{
            screens:{
              ReminderScreen: 'Reminder',
            },
          },
          CheckIn:{
            screens:{
              CheckInScreen: 'Check In',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
