import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import PostedQuestionScreen from '../Screens/postedQuestionScreen';
import QuestionEditScreen from '../Screens/questionEditScreen';
import ForumScreen from '../Screens/ForumScreen';

const Stack = createNativeStackNavigator();
export default function ForumStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Posted Questions"
        component={PostedQuestionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Edit Question"
        component={QuestionEditScreen}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
}
