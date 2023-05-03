import {
  View,
  FlatList,
  SafeAreaView,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts';
import {useRef, useState} from 'react';



const HomeScreen = () => {

    const [activPostId, setActivePostId] = useState<string | null>(null);

    const viewabilityConfig: ViewabilityConfig = {
      itemVisiblePercentThreshold: 51,
    };

    const onViewableItemsChanged = useRef(
      ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
        if (viewableItems.length > 0) {
          setActivePostId(viewableItems[0].item.id);
        }
      },
    );
  
  
 return (
   <SafeAreaView>
     <FlatList
       data={posts}
       renderItem={({item}) => (
         <FeedPost post={item} isVisible={activPostId === item.id} />
       )}
       keyExtractor={item => item.id}
       showVerticalScrollIndicator={false}
       onViewableItemsChanged={onViewableItemsChanged.current}
       viewabilityConfig={viewabilityConfig}
     />
   </SafeAreaView>
 );
}

export default HomeScreen;
