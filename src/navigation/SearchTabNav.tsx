import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommentScreen from '../screens/CommentScreen/CommentsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import UserSearchScreen from '../screens/UserSearchScreen/UserSearchScreen';
import colors from '../theme/colors';
import {SearchTabNavigatorParamList} from '../types/navigation';






const Tab = createMaterialTopTabNavigator < SearchTabNavigatorParamList>();

const SearchTabNav = () => {
const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {paddingTop: insets.top},
            tabBarIndicatorStyle: {backgroundColor: colors.primary, } 
        }} >
          <Tab.Screen name="Users" component={UserSearchScreen} />
          <Tab.Screen name="Posts" component={CommentScreen} />
        </Tab.Navigator>
    );
};

export default SearchTabNav;
