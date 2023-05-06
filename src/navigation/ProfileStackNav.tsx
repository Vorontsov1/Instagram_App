import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfeliScreen';

const Stack = createNativeStackNavigator();

const ProfileStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={ProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNav;
