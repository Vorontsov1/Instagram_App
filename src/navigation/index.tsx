import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../src/screens/ProfileScreen/ProfeliScreen';
import CommentsScreen from '../screens/CommentScreen/CommentsScreen';
import BottomTabNav from './BottomTabNav';
import { LinkingOptions } from '@react-navigation/native';
import {RootNavigator} from './types';
import {RootNavigatorParamList} from './types.ts';





const Stack = createNativeStackNavigator<RootNavigator>(); //{Navigator, Screen}
const linjing: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['mychat://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments', // mychat://comments
      //mychat://user/123
      Home: {
        screens: {
          HomeStack: {
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
    return (
      <NavigationContainer linking={linjing}>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{headerShown: true}}>
          <Stack.Screen name="Home" component={BottomTabNav} options={{ headerShown: false }} />
          <Stack.Screen name="Comments" component={CommentsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};




export default Navigation;  