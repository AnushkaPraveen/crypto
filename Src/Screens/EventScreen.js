import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';
import {filter} from 'lodash';
import {Searchbar, IconButton, Menu, Divider} from 'react-native-paper';
import ArticleCard from '../Components/ArticleCard';
import EventCard from '../Components/EventCard';
import {theme} from '../Core/theme';
import axios from 'axios';

const Events = [
  {
    id: 'E001',
    image: '../Assets/Event01.png',
    eventName: 'committee meeting',
    notes:
      'note for committee meeting fdsdcsdcadscasaxs xsdfsdcsds wefaf sdfadcas',
    date: '31st January 2020',
  },
  {
    id: 'E002',
    image: '../Assets/Event01.png',
    eventName: 'Annual Prty',
    notes:
      'note for committee meeting fdsdcsdcadscasaxs xsdfsdcsds wefaf sdfadcas',
    date: '31st January 2020',
  },
  {
    id: 'E003',
    image: '../Assets/Event01.png',
    eventName: 'Opening Ceremony',
    notes:
      'note for committee meeting fdsdcsdcadscasaxs xsdfsdcsds wefaf sdfadcas',
    date: '31st January 2020',
  },
  {
    id: 'E004',
    image: '../Assets/Event01.png',
    eventName: 'Opening Ceremony',
    notes:
      'note for committee meeting fdsdcsdcadscasaxs xsdfsdcsds wefaf sdfadcas',
    date: '31st January 2020',
  },
];

export default function ArticleScreen({navigation}) {
  const [data, setData] = useState();
  //const [image, setImage] = useState()
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  useEffect(() => {
    if(!data){
      axios.get('https://crypto-ts6.conveyor.cloud/api/Event')
      .then(res=>{
        console.log('response',res.data)
        setData(res.data);
      })
      .catch(error=>{
        console.log('error',error.response);
      })
     
    }
  })

  // const onChangeSearch = searchQuery => {
  //   if (searchQuery) {
  //     const formatedData = searchQuery.toLowerCase();
  //     const filterData = filter(data, Articles => {
  //       return contains(Articles, formatedData);
  //     });
  //     setData(filterData);
  //     setSearchQuery(formatedData);
  //   } else {
  //     setData(data);
  //   }
  // };

  // const contains = ({articleName, author}, searchQuery) => {
  //   if (
  //     articleName.toLowerCase().includes(searchQuery) ||
  //     author.toLowerCase().includes(searchQuery)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <SafeAreaView style={{padding: 5, backgroundColor: theme.colors.white}}>
      {/* <View>
        <Image style={styles.image} source={require('../Assets/event.png')} />
      </View> */}
      <View>
        <FlatList
          data={data}
          contentContainerStyle={{paddingBottom: 60}}
          style={{
            shadowColor: theme.colors.medium,
            shadowOpacity: 0.7,
            shadowOffset: {height: 5, width: 0},
          }}
          renderItem={({item}) => (
            <EventCard
              image={item.imageLink}
              eventName={item.name}
              notes={item.description}
              date={item.eventDate}
              time={item.eventTime}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  searchBar: {
    flex: 1,
    marginVertical: 10,
    height: 45,
    fontSize: 18,
  },
  filterIcon: {
    borderWidth: 2,
    borderRadius: 2,
    height: 47,
    width: 47,
    marginVertical: 10,
    borderColor: theme.colors.border,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
    marginLeft: 5,
    marginRight: 0,
    elevation: 5,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 250,
  },
});
