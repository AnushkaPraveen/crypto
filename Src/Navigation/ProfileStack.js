import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileEditScreen from '../Screens/ProfileEditScreen';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import PostedQuestionScreen from '../Screens/postedQuestionScreen';
import QuestionEditScreen from '../Screens/questionEditScreen';
import ForumScreen from '../Screens/ForumScreen';
import {IconButton} from 'react-native-paper';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          title: '',
          headerRight: () => (
            <IconButton
              icon="account-edit"
              color="white"
              onPress={() => navigation.navigate('Edit Profile')}
            />
          ),
          headerTitleStyle: {
            color: 'white',
          },
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="Edit Profile"
        component={ProfileEditScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
