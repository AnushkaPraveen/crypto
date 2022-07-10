import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Title, Paragraph, IconButton, Menu} from 'react-native-paper';
import {theme} from '../Core/theme';

const ArticleCard = ({image, articleName, author, date}) => {
  return (
    <Card style={styles.container} mode="elevated">
      <Card.Title
        title={articleName}
        style={{height: 40}}
        // right={props => (
        //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        // )}
      />
      <Card.Cover
        source={{
          uri:image
        }}
        style={styles.image}
      />
      <Card.Content>
        <View style={styles.content}>
          <Paragraph style={styles.description} numberOfLines={2}>
            {author}
          </Paragraph>
          <Paragraph style={styles.description} numberOfLines={2}>
            {date}
          </Paragraph>
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
    height: 170,
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
    fontSize: 17,
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    color: theme.colors.medium,
  },
  content: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ArticleCard;
