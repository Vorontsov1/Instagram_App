import { View, StyleSheet, ScrollView } from 'react-native';
import FeedPost from './src/components/FeedPost';

const post = {
  id: '1',
  createdAt: 'November/10/1989',
  image:
    'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  description:
    'BOB is a character in the television series Twin Peaks. He is a supernatural entity that possesses humans and feeds on their pain and suffering. ',
  user: {
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'Laura Palmer',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Fire walk with',
      user: {
        username: 'David Linch',
      },
    },
    {
      id: '2',
      comment:
        'She is dead. Wrapped in plastic. - spoken by Dale Cooper in the pilot episode of Twin Peaks.',
      user: {
        username: 'Dale Cooper',
      },
    },
  ],
};



const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
