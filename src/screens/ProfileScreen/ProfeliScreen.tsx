import { Image, FlatList, SafeAreaView } from 'react-native';
import {useRoute, useNavigation}  from '@react-navigation/native';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRoutProp,
} from '../../types/navigation';




const ProfileScreen = () => { 
  const route = useRoute<UserProfileRouteProp | MyProfileRoutProp>();
  const navigation = useNavigation<UserProfileNavigationProp | MyProfileNavigationProp>();

  const  userId = route.params?.userId;
//query for user with id = userId
 

    return (
      <SafeAreaView>
            <FeedGridView
                data={user.posts}
                ListHeaderComponent={ProfileHeader} 
            />
      </SafeAreaView>
    );
}

export default ProfileScreen;