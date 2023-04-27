import {useState} from 'react';
import { View, Text, FlatList, Image, useWindowDimensions, ScrollView } from 'react-native';
import colors from '../../../src/theme/colors.ts';




interface ICarousel {
    images: string[];
}

const Carousel = ({ images }: ICarousel) => {
    const { width } = useWindowDimensions();
    const [activeImageIndex, setActiveImageIndex] = useState(1);

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
        )}
        pagingEnabled
        horizontal
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
                backgroundColor:
                    activeImageIndex === index  ? colors.primary : colors.white,
              borderRadius: 5,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
}

export default Carousel;
