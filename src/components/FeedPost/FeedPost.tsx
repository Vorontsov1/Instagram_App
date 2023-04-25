import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors.ts';
import font from '../../theme/fonts.ts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v); //make it to true
  };
  const [islike, setIslike] = useState(false);


  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: post.user.image}} />
        <Text style={styles.name}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color={colors.gray}
          style={styles.dots}
        />
      </View>
      {/* Content */}
      <Image style={styles.image} source={{uri: post.image}} />
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            onPress={() => setIslike(!islike)}
            name={islike ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={islike ? 'red' : colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Like by
          <Text style={styles.bold}>username </Text>and{' '}
          <Text style={styles.bold}>{post.nofLikes}</Text>
        </Text>
        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded} style={styles.text}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>
        <Text style={{color: colors.grey}}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <Text style={{color: colors.grey}}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
