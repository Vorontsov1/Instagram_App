import { View, Text, StyleSheet, Image } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';



const App = () => {
  return (
  
      <View style={styles.post}>
        {/* Header */}

        {/* Content */}
        <Image
          style={styles.image}
          src={
            'https://images.pexels.com/photos/821742/pexels-photo-821742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        />
        {/* Footer */}
      </View>

  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default App;
