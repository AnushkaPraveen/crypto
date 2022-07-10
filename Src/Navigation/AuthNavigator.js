import * as React from 'react';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen01';
import SignUpScreenTwo from '../Screens/SignUpScreen02';
import LandingScreen from '../Screens/LandingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileEditScreen from '../Screens/ProfileEditScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LangingPage"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="SignUpSecond"
        component={SignUpScreenTwo}
        options={{
          title: 'Sign Up',
        }}
      />
      {/* <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        /> */}
    </Stack.Navigator>
  );
}



