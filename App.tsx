import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentScreen';




const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      <CommentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
