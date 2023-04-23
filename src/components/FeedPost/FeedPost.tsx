import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors.ts';
import font from '../../theme/fonts.ts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const FeddPost = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          src={
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
          'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
        <Text style={styles.text}>
          Like by
          <Text style={styles.bold}>username </Text>and
          <Text style={styles.bold}> 77 others</Text>
        </Text>
        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>laurapalmer </Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi totam
          doloribus ducimus, tempora placeat deserunt odit eum. Vitae ducimus in
          ullam.
        </Text>
        {/* Comments */}
        <Text style={{color: colors.grey}}>View all 17 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>laurapalmer </Text>
           Fire walk with me.
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
        </View>
        {/* Posted by  */}
        <Text style={{color: colors.grey}}>19 December, 2021</Text>
      </View>
    </View>
  );
};

export default FeddPost;
