import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
// import PushNotification from 'react-native-push-notification';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  //   const createChannels =( ) => {
  //     PushNotification.createChannel(
  //         {
  //             channelId : 'test-channel01',
  //             channelName : 'test channel 01',
  //         }
  //     )
  //   }

  // const handleNotification = messages => {
  //   PushNotification.localNotification({
  //     channelId: 'test-channel01',
  //     title: 'New Message',
  //     message: messages.text,
  //   });
  // };

  useEffect(() => {
    // createChannels();
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#0EA35D',
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      onPressAvatar={() => {
        // handleNotification(messages);
      }}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
