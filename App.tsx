import { View, Text, StyleSheet, Image } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';



const App = () => {
  return (
  
      <View style={styles.post}>
        {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          src={"https://images.pexels.com/photos/1758845/pexels-photo-1758845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
        <Text style={styles.name}>Laura Palmer</Text>
        <Entypo name="dots-three-horizontal" size={16} color={colors.gray}  style={styles.dots}/>
        </View>
       { /* Content */}
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
  header: {
    flexDirection: 'row',
    marginTop: 50,
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: font.weight.bold,
    color: colors.black,
  },
  dots: {
    marginLeft: 'auto',
  },
});

export default App;
