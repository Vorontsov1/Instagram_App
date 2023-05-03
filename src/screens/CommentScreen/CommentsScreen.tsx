import { View, Text, FlatList } from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';



const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={{padding: 10}}
      />
    </View>
  );
};

export default CommentsScreen;
