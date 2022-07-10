import * as React from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {theme} from '../Core/theme';
import PackageCard from '../Components/PackageCard';

const Packages = [
  {
    id: 'P01',
    name: 'Platinum',
    maxAlerts: 500,
    duration: '6 Months',
    price: 7,
  },
  {
    id: 'P02',
    name: 'Gold',
    maxAlerts: 250,
    duration: '3 Months',
    price: 4,
  },
  {
    id: 'P03',
    name: 'Silver',
    maxAlerts: 100,
    duration: '1 Months',
    price: 2,
  },
];

function PackagesScreen({navigation}) {
  return (
    <SafeAreaView>
      <Image style={styles.image} source={require('../Assets/package02.png')} />
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <FlatList
            data={Packages}
            contentContainerStyle={{paddingBottom: 60}}
            style={{
              shadowColor: theme.colors.medium,
              shadowOpacity: 0.7,
              shadowOffset: {height: 5, width: 0},
            }}
            renderItem={({item}) => (
              <PackageCard
                name={item.name}
                maxAlerts={item.maxAlerts}
                duration={item.duration}
                price={item.price}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PackagesScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    // marginTop: 10,
  },
  image: {
    width: '110%',
    height: 250,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  cardContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: theme.colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: '95%',
    borderBottomColor: theme.colors.medium,
    borderWidth: 1,
  },
  nameContainer: {
    width: '38%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: theme.colors.cardbackground,
    borderRadius: 10,
  },
  detailContainer: {
    width: '60%',
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
    fontSize: 15,
    color: theme.colors.dark,
    fontWeight: 'bold',
  },
  purchaseButton: {},
});
