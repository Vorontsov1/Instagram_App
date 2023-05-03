import { Pressable, Text, StyleSheet } from 'react-native';
import color from '../../theme/colors.ts';
import fonts from '../../theme/fonts.ts';



interface IButtonProps {
    text?: string;
    onPress?: () => void;
} 

const Button = ({text = '', onPress = () => {}} : IButtonProps)  => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
          <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: color.border,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        margin: 5,
    },
    text: {
        color: color.black,
        fontWeight: fonts.weight.semi,
    },
});
export default Button;
