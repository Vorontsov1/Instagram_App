import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import fonts from '../../theme/fonts.ts';
import colors from '../../theme/colors.ts';
import {useNavigation} from '@react-navigation/native';

interface IUserListItem {
    user: IUser; 
}





const UserListItem = ({ user }: IUserListItem) => {

    const navigation = useNavigation();
    const goToUserScreen = () => {
  navigation.navigate('MyProfile', {userId: user.id});
    };
    
    
  return (
    <Pressable onPress={goToUserScreen} style={styles.root}>
      <Image
              source={{ uri: user.image }}
              style={styles.image}
          />
          <View>
              <Text style={styles.nameText}>{user.name}</Text>
              <Text style={styles.usernameText}>{user.username}</Text>
          </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
  image: {
    width: 50,
    aspectRatio: 1,
      borderRadius: 25,
    marginRight: 10,
  },
    nameText: {
      fontWeight: fonts.weight.bold,
  },
    usernameText: {
      color: colors.grey,
  },
});

export default UserListItem;
