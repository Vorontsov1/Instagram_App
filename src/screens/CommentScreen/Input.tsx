import {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import colors from '../../theme/colors.ts';
import fonts from '../../theme/fonts.ts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Post', newComment);
    // sending the data to backend

    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Write your comment..."
        multiline
        style={styles.input}
      />

      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 13.5,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});
export default Input;
