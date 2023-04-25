import {View, FlatList, SafeAreaView} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts';



const HomeScreen = () => {
 return (
   <SafeAreaView>
     <FlatList
       data={posts}
       renderItem={({item}) => <FeedPost post={item} />}
       keyExtractor={item => item.id}
       showVerticalScrollIndicator={false}
     />
   </SafeAreaView>
 );
}

export default HomeScreen;
