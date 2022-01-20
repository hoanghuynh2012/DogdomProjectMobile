import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LauncherScreen, LoginScreen, HomeScreen} from '../screens/index';
import {CustomIcon} from '@components';
import {Colors} from '@styles'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarActiveTintColor: Colors.RED,
          tabBarInactiveTintColor: Colors.BLACK,
          tabBarOptions: {
            showIcon: true,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <CustomIcon name="Home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <CustomIcon name="Circle" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Home 1"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <CustomIcon name="Add" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Home 2"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <CustomIcon name="Comments" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Home 3"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <CustomIcon name="User" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
