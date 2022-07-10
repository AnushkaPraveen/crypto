import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentsScreen from '../Screens/PaymentScreen';
import PackagesScreen from '../Screens/PackagesScreen';

const Stack = createNativeStackNavigator();

export default function PackagesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Package"
        component={PackagesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Purchase"
        component={PaymentsScreen}
        options={{
          headerShown: false,
        }}
        // options={({route}) => ({
        //   title: route.params.userName,
        //   headerBackTitleVisible: false,
        // })}
      />
    </Stack.Navigator>
  );
}
