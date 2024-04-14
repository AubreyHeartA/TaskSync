import React, { useState, useEffect } from "react";
import { Icon } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './../screens/Home';
import Task from './../screens/Task';
import Team from './../screens/Team';
import Profile from './../screens/Profile';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Add your logic to check the user's login state
//     // Example: AsyncStorage.getItem("isLoggedIn").then(value => setIsLoggedIn(!!value));
//   }, []);

  return (
    <Tab.Navigator
      initialRouteName="Task"
      screenOptions={({ route }) => ({      
        headerShown: false,
        tabBarStyle: { height: 55 }, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Task') {
            iconName = focused ? 'notebook' : 'notebook-outline';
          } else if (route.name === 'Team') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <Icon source={iconName} size={30} color={color} />;
        },

        tabBarIconStyle: { marginTop: 5 },
        tabBarActiveTintColor: '#0a4f4f',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.8)',
        tabBarLabelStyle: { color: 'black', fontSize: 12, marginBottom: 5 },
      })}
    >  
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Task" component={Task} />
      <Tab.Screen name="Team" component={Team} />
      <Tab.Screen name="Profile" component={Profile} />
{/* 
      {}
      {isLoggedIn ? null : (
        <Tab.Screen
          options={{
            tabBarButton: () => null, 
            tabBarIcon: () => null, 
          }}
          name="LoginForm"
          component={LoginForm}
        />
      )}

      {} */}
      
    </Tab.Navigator>
  );
}
