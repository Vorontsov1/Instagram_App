import { View, Text } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';



const App = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#a4f84f',
      }}>
      <Text style={{color: colors.primary, fontSize: font.size.xxlg}}>
        Hello Anton 
        {'  '}
        <Entypo name="instagram" size={30} color="red" />
      </Text>
    </View>
  );
};

export default App;
