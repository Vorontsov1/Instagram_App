import React from 'react';
import { View, Text, FlatList } from 'react-native';
import UserListItem from '../../components/UserListItem';
import users from '../../assets/data/users.json';

const UserSearchScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />} 
    />
  );
}

export default UserSearchScreen;
