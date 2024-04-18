import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './../screens/Home';
import Task from './../screens/Task';
import Team from './../screens/Team';
import Profile from './../screens/Profile';

const Tab = createBottomTabNavigator();

const customIcons = {
  Home: {
    active: require('../../../assets/home-active.png'),
    inactive: require('../../../assets/home-inactive.png')
  },
  Task: {
    active: require('../../../assets/task-active.png'),
    inactive: require('../../../assets/task-inactive.png')
  },
  Team: {
    active: require('../../../assets/team-active.png'),
    inactive: require('../../../assets/team-inactive.png')
  },
  Profile: {
    active: require('../../../assets/profile-active.png'),
    inactive: require('../../../assets/profile-inactive.png')
  },
};
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
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 65,
          backgroundColor: '#fff', // Adjust to your green background color
          borderTopWidth: 3, // No top border
          borderTopColor: '#34C759',
          borderTopLeftRadius: 20, // Only rounding the top left corner
          borderTopRightRadius: 20, // Only rounding the top right corner
          position: 'absolute', // Absolute position to float over content
          overflow: 'hidden', // Clips children to the rounded corners
        },
        tabBarIcon: ({ focused }) => {
          const icon = customIcons[route.name][focused ? 'active' : 'inactive'];
          return <Image source={icon} style={{ width: 35, height: 35, marginTop: 7 }} resizeMode="contain" />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 7, // Adjust this if necessary to align the label
        },
        tabBarActiveTintColor: '#34C759', // Active label color
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.5)', // Inactive label color
      })}
    >  
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
      }} />
      <Tab.Screen name="Task" component={Task} options={{
        tabBarLabel: 'Tasks',
      }} />
      <Tab.Screen name="Team" component={Team} options={{
        tabBarLabel: 'Team',
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
      }} />
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
