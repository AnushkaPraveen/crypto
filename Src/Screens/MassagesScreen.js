import React, { useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
// import PushNotification from 'react-native-push-notification';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Aleena Mitchel',
    userImg: require('../Assets/img01.png'),
    messageTime: '10 mins ago',
    messageText: 'Hello !',
  },
  {
    id: '2',
    userName: 'John Smith',
    userImg: require('../Assets/img02.png'),
    messageTime: '2 hours ago',
    messageText: 'what about the project evaluation?',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../Assets/img01.png'),
    messageTime: '1 hours ago',
    messageText: '🤩✌️',
  },
];

const MessagesScreen = ({navigation}) => {
  // const createChannels = () => {
  //   // PushNotification.createChannel({
  //   //   channelId: 'test-channel01',
  //   //   channelName: 'test channel 01',
  //   // });
  // };

  // useEffect(() => {
  //   createChannels();
  // });

  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              navigation.navigate('Chat', {userName: item.userName})
            }>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}

      />
    </Container>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
