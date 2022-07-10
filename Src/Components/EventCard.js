import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  IconButton,
  Menu,
  Button,
} from 'react-native-paper';
import {theme} from '../Core/theme';

const EventCard = ({image, eventName, notes, date,time, navigation}) => {
  return (
    <Card style={styles.container} mode="elevated">
      <Card.Cover
       source={{
          uri:image
        }}
        style={styles.image}
      />
      <Card.Content>
        <Paragraph style={{marginTop: 10, fontWeight: 'bold'}}>
          {eventName}
        </Paragraph>
        <Paragraph style={styles.description} numberOfLines={5}>
          {notes}
        </Paragraph>
        <View style={styles.content}>
          <Paragraph style={styles.description} numberOfLines={2}>
            {date}  {time}
          </Paragraph>
          <Card.Actions>
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={styles.buttonLable}
              // onPress={() => navigation.navigate('Purchase')}
            >
              Get Tickets
            </Button>
          </Card.Actions>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 2,
    marginBottom: 10,
    elevation: 20,
  },
  image: {
    height: 150,
  },
  shareButton: {
    width: 94,
    height: 35,
    paddingVertical: 0,
  },
  paymentTag: {
    backgroundColor: 'red',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  paymentTagText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  actionContainer: {
    justifyContent: 'space-between',
    height: 65,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.dark,
  },
  description: {
    fontSize: 12,
    color: theme.colors.medium,
    marginTop: 2,
  },
  content: {
    height: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.colors.primary,
    height: 30,
  },
  buttonLable: {
    fontSize: 13,
    marginTop: 6,
  },
});

export default EventCard;
