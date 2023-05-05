import { Image, FlatList, SafeAreaView } from 'react-native';
import {useRoute, useNavigation}  from '@react-navigation/native';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';


const ProfileScreen = () => { 
  const route = useRoute();
  const navigation = useNavigation();

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