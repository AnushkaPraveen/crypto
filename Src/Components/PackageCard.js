import * as React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {theme} from '../Core/theme';
import { useNavigation } from '@react-navigation/native';

const PackageCard = ({name, maxAlerts, duration, price }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.packageTitle}>{name}</Text>
          <Button
            mode="flat"
            style={styles.purchaseButton}
            onPress={() => navigation.navigate('Purchase')}>
            Buy
          </Button>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.staticContainer}>
            <Text style={{fontWeight:"700" , fontSize:14}}>Maximum Alerts</Text>
            <Text style={{fontWeight:"700" , fontSize:14}}>Duration</Text>
            <Text style={{fontWeight:"700" , fontSize:14}}>Price</Text>
          </View>
          <View style={styles.dynamicContainer}>
            <Text style={{fontWeight:"700" , fontSize:14}}>{maxAlerts}</Text>
            <Text style={{fontWeight:"700" , fontSize:14}}>{duration}</Text>
            <Text style={{fontWeight:"700" , fontSize:14}}>$ {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    height: 150,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: theme.colors.cardbackgroundLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: '93%',
    borderBottomColor: theme.colors.medium,
    borderWidth: 1,
    marginTop: '2%',
  },
  nameContainer: {
    width: '36%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: theme.colors.cardbackgroundDark,
    borderRadius: 10,
  },
  detailContainer: {
    width: '62%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    marginLeft: '4%',
  },
  staticContainer: {
    width: '50%',
  },
  dynamicContainer: {
    width: '50%',
    marginLeft: '10%',
  },
  packageTitle: {
    fontSize: 18,
    color: theme.colors.dark,
    fontWeight: 'bold',
  },
  purchaseButton: {},
});
