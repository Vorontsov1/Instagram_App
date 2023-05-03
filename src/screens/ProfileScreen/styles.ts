import { StyleSheet } from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';





const styles = StyleSheet.create({
  root: {
    margin: 15,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
      justifyContent: 'space-between',
    marginVertical: 10,
  },
  profileImage: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContainer: {
    alignItems: 'center',
  },
  number: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
    color: colors.black,
  },
    name: {
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,
        color: colors.black,
  },
});

export default styles;
