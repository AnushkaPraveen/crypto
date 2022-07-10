import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AuthContext} from '../Core/Utils';
import GraphsScreen from '../Screens/GraphsScreen';
import ArticleBottomTab from './ArticleBottomTabs';
import EventBottomTab from './EventBottomTab';
import CryptoScreen from '../Screens/CryptoScreen';
import PackagesStack from './PackageStack';
import ProfileStack from './ProfileStack';
import ForumStack from './ForumStack';
import ChatStack from './ChatStack';

const Drawer = createDrawerNavigator();

function ProfilePic() {
  return (
    <Image
      style={{width: 37, height: 37, marginRight: 15}}
      source={require('../Assets/Profile.png')}
    />
  );
}

function DrawerContent(props) {
  const {signOut} = React.useContext(AuthContext);

  function signOutPressed() {
    signOut();
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      /> */}
      <DrawerItem label="Log Out" onPress={signOutPressed} />
    </DrawerContentScrollView>
  );
}

export default function AppDrawer({navigation}) {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Articles"
        component={ArticleBottomTab}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Events "
        component={EventBottomTab}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Forum  "
        component={ForumStack}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Graphs"
        component={GraphsScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Packages"
        component={PackagesStack}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Cripto Type"
        component={CryptoScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Profile  "
        component={ProfileStack}
      />
      <Drawer.Screen
        name="Chat  "
        component={ChatStack}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
    </Drawer.Navigator>
  );
}
