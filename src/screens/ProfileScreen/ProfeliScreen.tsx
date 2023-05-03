import {Image, FlatList, SafeAreaView} from 'react-native';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';







const ProfileScreen = () => { 
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