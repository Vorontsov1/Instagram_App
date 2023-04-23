import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors.ts';
import font from '../../theme/fonts.ts';

interface ICommentProps { 
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username} </Text>
        {comment.comment}
      </Text>
      <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
    </View>
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
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

