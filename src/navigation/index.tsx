import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../src/screens/ProfileScreen/ProfeliScreen';
import BottomTabNav from './BottomTabNav';



const Stack = createNativeStackNavigator(); //{Navigator, Screen}


const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: true}}>
          <Stack.Screen name="Home" component={BottomTabNav} options={{headerShown: false}} />

          <Stack.Screen
            name="UserProfile"
            component={ProfileScreen}
            options={{title: 'UserProfile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};




export default Navigation;  