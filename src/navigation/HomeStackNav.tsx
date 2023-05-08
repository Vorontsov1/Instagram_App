import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import logo from '../assets/images/logo.png';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileStackNav from './ProfileStackNav';
import {HomeStackNavigatorParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileStackNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40}}
    />
  );
};
export default HomeStackNav;
