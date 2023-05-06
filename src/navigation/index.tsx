import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../src/screens/ProfileScreen/ProfeliScreen';
import CommentsScreen from '../screens/CommentScreen/CommentsScreen';
import BottomTabNav from './BottomTabNav';
import {RootNavigator} from './types';




const Stack = createNativeStackNavigator<RootNavigator>(); //{Navigator, Screen}


const Navigation = () => {
    return (
      <NavigationContainer>
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