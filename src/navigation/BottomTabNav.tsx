import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileStackNav from './ProfileStackNav';
import HomeStackNav from './HomeStackNav';
import { BottomTabNavigatorParamList } from '../types/types';
import SearchTabNav from '../navigation/SearchTabNav';
import colors from '../theme/colors.ts';





const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNav}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchTabNav}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNav}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;