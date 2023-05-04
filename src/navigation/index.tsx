import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';
import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../src/screens/ProfileScreen/ProfeliScreen';
import logo from '../assets/images/logo.png';





const Stack = createNativeStackNavigator(); //{Navigator, Screen}


const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Feed"
          screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="Feed"
            component={HomeScreen}
            options={{headerTitle: HeaderTitle}}
          />

          <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: 'Profile' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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


export default Navigation;  