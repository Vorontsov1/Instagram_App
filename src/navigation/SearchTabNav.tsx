import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommentScreen from '../screens/CommentScreen/CommentsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';




const Tab = createMaterialTopTabNavigator();

const SearchTabNav = () => {
const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {paddingTop: insets.top}

        }} >
          <Tab.Screen name="UserSearch" component={HomeScreen} />
          <Tab.Screen name="PostSearch" component={CommentScreen} />
        </Tab.Navigator>
    );
};

export default SearchTabNav;
