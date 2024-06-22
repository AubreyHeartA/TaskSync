import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './../screens/Home';
import Task from './../screens/Task';
import Profile from './../screens/Profile';
import Login from './../forms/Login';
import Register from './../forms/Register';
import TeamInfo from './../screens/TeamInfo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const customIcons = {
  Home: {
    active: require('../../../assets/home-active.png'),
    inactive: require('../../../assets/home-inactive.png')
  },
  Task: {
    active: require('../../../assets/white.png'),
    inactive: require('../../../assets/white.png')
  },
  //Task: {
    //active: require('../../../assets/task-active.png'),
    //inactive: require('../../../assets/task-inactive.png')
  //},
  Profile: {
    active: require('../../../assets/profile-active.png'),
    inactive: require('../../../assets/profile-inactive.png')
  },
};

function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({      
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#fff', // Adjust to your green background color
          borderTopWidth: 3, // No top border
          borderTopColor: '#5ccb51',
          borderTopLeftRadius: 20, // Only rounding the top left corner
          borderTopRightRadius: 20, // Only rounding the top right corner
          position: 'absolute', // Absolute position to float over content
          overflow: 'hidden', // Clips children to the rounded corners
        },
        tabBarIcon: ({ focused }) => {
          const icon = customIcons[route.name][focused ? 'active' : 'inactive'];
          return <Image source={icon} style={{ width: 40, height: 40, marginTop: 7 }} resizeMode="contain" />;
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 7, // Adjust this if necessary to align the label
        },
        tabBarActiveTintColor: '#5ccb51', // Active label color
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.5)', // Inactive label color
      })}
    >  
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
      }} />
      <Tab.Screen name="Task" component={Task} options={{
        //tabBarLabel: 'Tasks',
        tabBarLabel: '',
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
      }} />
    </Tab.Navigator>
  );
}

export default function Navigation({ initialRouteName }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="TeamInfo" component={TeamInfo} />
    </Stack.Navigator>
  );
}
