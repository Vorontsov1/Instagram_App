import { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors.ts';
import font from '../../theme/fonts.ts';

interface ICommentProps { 
  comment: IComment;
  includeDetails: boolean;
}


const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toogleLike = () => {
    setIsLiked(v => !v);
  };
  return (
    <SafeAreaView style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.midddleColumn}>
        <Text style={styles.commentText}>
<<<<<<< Updated upstream
          <Text style={styles.bold}>{comment.user.username} </Text>
=======
          <Text style={styles.bold}>{comment.User?.username} </Text>{' '}
>>>>>>> Stashed changes
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toogleLike} hitSlop={6}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={13}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </SafeAreaView>
  );
};
export default Comment;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: font.weight.bold,
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 5,
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  midddleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
    color: 'gray',
  },
});

