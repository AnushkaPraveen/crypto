import * as React from 'react';
import {theme} from '../Core/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventScreen from '../Screens/EventScreen';
import AddEventsScreen from '../Screens/AddEventScreen';

const eventTab = createBottomTabNavigator();

export default function EventBottomTab() {
    return (
        <eventTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Events') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Add Events') {
              iconName = focused ? 'add-circle' : 'add';
            } 
            // else if (route.name === 'Profile') {
            //   iconName = focused ? 'ios-person' : 'ios-person-outline';
            // }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <eventTab.Screen name="Events" component={EventScreen} />
        <eventTab.Screen name="Add Events" component={AddEventsScreen} />
        {/* <eventTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
          }}
        /> */}
      </eventTab.Navigator>
    );
}