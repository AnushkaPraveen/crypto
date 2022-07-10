import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TextInput from '../Components/TextInput';
import {Button, Card, IconButton, Title} from 'react-native-paper';
import {theme} from '../Core/theme';

const questions = [
  {
    questionId: 1,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 2,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 3,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 4,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
];

function ProfilePic() {
  return (
    <Image
      style={{width: 37, height: 37, marginRight: 15}}
      source={require('../Assets/Profile.png')}
    />
  );
}
function ForumScreen({navigation}) {
  const [textInput, setTextInput] = useState('');

  const onPost = () => {};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TextInput
          multiline
          style={Styles.input}
          placeholder="Enter Your Question Here..."
          numberOfLines={7}
          maxLength={200}
          onChangeText={text => setTextInput(text)}
        />
        <View style={{alignItems: 'flex-end', marginRight: 12}}>
          <Button mode="contained" style={{width: '30%'}} onPress={onPost}>
            POST
          </Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 18,
            marginLeft: 12,
          }}>
          <Text
            style={{fontSize: 17, marginRight: 12, color: theme.colors.dark}}>
            Posted Questions
          </Text>
          <IconButton
            icon="arrow-right"
            style={{marginTop: -2, borderWidth: 1, color: 'blue'}}
            size={20}
            onPress={() => {
              navigation.navigate('Posted Questions');
            }}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Title style={Styles.title}>Recent Questions</Title>
        </View>
        <FlatList
          data={questions}
          keyExtractor={data => data.questionId}
          contentContainerStyle={{}}
          style={{
            shadowColor: theme.colors.medium,
            shadowOpacity: 0.7,
            shadowOffset: {height: 5, width: 0},
          }}
          renderItem={({item}) => (
            <View style={{marginVertical: 3, marginHorizontal: 12}}>
              <Card.Title
                style={{
                  borderWidth: 1,
                  borderColor: theme.colors.light,
                  backgroundColor: 'white',
                }}
                title={item.userName}
                subtitle={item.date}
                left={props => <ProfilePic {...props} />}
                right={() => (
                  <IconButton icon="dots-horizontal" onPress={() => {}} />
                )}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const Styles = {
  input: {
    margin: 12,
  },
  title: {
    marginLeft: 12,
    marginTop: 10,
    borderBottomWidth: 1,
    marginRight: 12,
    padding: 5,
  },
};

export default ForumScreen;
