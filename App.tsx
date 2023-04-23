import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          src={
            'https://images.pexels.com/photos/1758845/pexels-photo-1758845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        />
        <Text style={styles.name}>Laura Palmer</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color={colors.gray}
          style={styles.dots}
        />
      </View>
      {/* Content */}
      <Image
        style={styles.image}
        src={
          'https://images.pexels.com/photos/821742/pexels-photo-821742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      />
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text>
          Like by <Text style={{fontWeight: font.weight.bold}}>username </Text>
          and
          <Text style={{fontWeight: font.weight.bold}}> 77 others</Text>
        </Text>
        {/* Post description */}
        <Text>
          <Text>laurapalmer {' '}</Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi totam doloribus ducimus, tempora placeat deserunt odit eum. Vitae ducimus in ullam.
        </Text>
      </View>
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
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default App;
