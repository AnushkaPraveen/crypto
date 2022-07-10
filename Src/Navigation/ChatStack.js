import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MassagesScreen from '../Screens/MassagesScreen';
import ChatScreen from '../Screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Massages"
        component={MassagesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
