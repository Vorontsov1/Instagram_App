import {
  View,
  FlatList,
  SafeAreaView,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import FeedPost from '../../components/FeedPost';
import { useRef, useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';


export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          name
          email
          username
          image
          bio
        }
        Comments {
          items {
            id
            comment
            User {
              id
              name
              username
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;

const HomeScreen = () => {

  const [activPostId, setActivePostId] = useState<null | string>(null);
  const [posts, setPosts] = useState([]);

const fetchPosts = async () => {
  try {
    const response = await API.graphql(graphqlOperation(listPosts));
    setPosts(response.data.listPosts.items);
  } catch (error) {
    console.error('An error occurred while fetching posts:', error);
  }
};

      useEffect(() => { 
        fetchPosts();  
      },[]);



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
         <FeedPost
           post={item} isVisible={activPostId === item.id} />
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
