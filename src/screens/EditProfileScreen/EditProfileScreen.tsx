import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors.ts';
import fonts from '../../theme/fonts.ts';


interface ICustomInputProps { 
    label: string;
    multiline?: boolean;
 }

const CustomInput = ({ label, multiline = false }:  ICustomInputProps) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput placeholder={label} style={styles.input} multiline={multiline} />
  </View>
);

const EditProfileScreen = () => {
    const onSubmit = () => {
        console.log('submit');
     }

  return (
    <SafeAreaView style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>

      <CustomInput label="Name" />
      <CustomInput label="Userame" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>Submit</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 10,
    // padding: 10,
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
    padding: 5,
    color: colors.grey,
  },
});
export default EditProfileScreen;
