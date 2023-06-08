import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../src/screens/ProfileScreen/ProfileScreen';
import CommentsScreen from '../screens/CommentScreen/CommentsScreen';
import BottomTabNav from './BottomTabNav';
import {LinkingOptions} from '@react-navigation/native';
import {RootNavigator} from '../types/navigation';
import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import { useAuthContext } from '../contexts/AuthContext';
import { View, ActivityIndicator } from 'react-native';





const Stack = createNativeStackNavigator<RootNavigator>(); //{Navigator, Screen}
const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['mychat://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments', // mychat://comments
      //mychat://user/123
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  const {user} = useAuthContext();

  if (user === undefined) {
    return (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
    </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}>
        {!user ? (<Stack.Screen
          name="Auth"
          component={ AuthStackNavigator }
          options={ { headerShown: false } }
        />) : (
          <>
            <Stack.Screen
              name="Home"
              component={ BottomTabNav }
              options={ { headerShown: false } }
            />
            <Stack.Screen name="Comments" component={ CommentsScreen } />
          </>
        )}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
