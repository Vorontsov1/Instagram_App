import {View, Text, SafeAreaView, Image,} from 'react-native';
import user from '../../assets/data/user.json';
import Button from '../../components/Button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';



const ProfileHeader = () => {
  const navigation = useNavigation();

  
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headerRow}>
        {/* profile image  */}
        <Image
          source={{uri: user.image}}
          resizeMode="cover"
          style={styles.profileImage}
        />

        {/* Posts, followers, following  number */}
        <View style={styles.numberContainer}>
          <Text style={styles.number}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.number}>592</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.number}>236</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* buttons */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button
          text="Go back"
          onPress={() => navigation.popToTop()}
        />
      </View>

      {/* Grid of posts */}
    </SafeAreaView>
  );
};

export default ProfileHeader;
