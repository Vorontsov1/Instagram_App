import React from 'react';
import { View, Text, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={{flex: 1, padding: 1, aspectRatio: 1, maxWidth: '33.33%'}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
      {post.images && (
              <MaterialIcons name="collections" size={16} color="white"
        style={{position: 'absolute', bottom: 5, right: 5}}
              />
      )}
    </View>
  );
}

export default FeedGridItem;
