import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView , ScrollView } from "react-native-safe-area-context";

const AppCard = ({ image, articleName, author, date }) => {
  return (
    <SafeAreaView>
      <View style={{ height: "80%" }}>
        <Card style={styles.cardContainer} >
          <Card.Title
            title={articleName}
            style={{ height: 40 }}
            right={(props) => (
              <IconButton {...props} icon="menu" onPress={() => {}} />
            )}
          />

          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content style={styles.cardContent}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Paragraph style={styles.cardParagraph}>{author}</Paragraph>
              <Paragraph style={styles.cardParagraph}>{date}</Paragraph>
            </View>
          </Card.Content>
          <View></View>
          {/* <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions> */}
        </Card>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "99%",
    height: 80,
    alignSelf: "center",
    marginTop: -38,
    // height: "50%",
  },
  cardContent: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "blue",
    borderBottomWidth: 3,
  },
  cardParagraph: {
    marginTop: 5,
  },
});

export default AppCard;
