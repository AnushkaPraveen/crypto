import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './Src/Core/theme';
import {AuthContext} from './Src/Core/Utils';
import AuthStack from './Src/Navigation/AuthNavigator';
import AppDrawer from './Src/Navigation/AppNavigator';
import SplashScreen from './Src/Screens/SplashScreen';
import {AsyncStorage} from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        try {
          // await SecureStore.setItemAsync('userToken', 'dummy-auth-token');
          await AsyncStorage.setItem('userToken', 'dummy-auth-token');
          console.log('User Token : ' + userToken);
        } catch (err) {
          console.log('Error in Storing :' + err);
        }
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
        console.log('token stored successfully');
      },
      signOut: async () => {
        try {
          // await SecureStore.deleteItemAsync('userToken', 'dummy-auth-token');
          await AsyncStorage.removeItem('userToken');
        } catch (err) {
          console.log('Error in storage :' + err);
        }
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async data => {
        try {
          // userToken = await SecureStore.getItemAsync(
          //   'userToken',
          //   'dummy-auth-token',
          // );
          userToken = await AsyncStorage.getItem(
            'userToken',
            'dummy-auth-token',
          );
        } catch (err) {
          console.log(err.message);
        }
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          // SecureStore.deleteItemAsync('userToken');
          // AsyncStorage.removeItem('userToken');
          console.log('you are loged out');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        // userToken = await SecureStore.getItemAsync('userToken');
        userToken = await AsyncStorage.getItem('userToken');
        console.log('Token Restored : ');
      } catch (e) {
        console.log('Restoring token failed');
      }
      dispatch({type: 'RESTORE_TOKEN', token: 'dummy-auth-token'});
    };
    bootstrapAsync();
  }, []);

  return (
    // <PaperProvider theme={theme}>
    //   <NavigationContainer>
    //     {/* <AuthStack /> */}
    //     <AppDrawer />
    //   </NavigationContainer>
    // </PaperProvider>
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            {state.isLoading ? (
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              <Stack.Screen
                name="SignInStack"
                component={AuthStack}
                options={{
                  // title: 'Sign in',
                  headerShown: false,
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            ) : (
              <Stack.Screen
                name="Home"
                component={AppDrawer}
                options={{
                  headerShown: false,
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}
