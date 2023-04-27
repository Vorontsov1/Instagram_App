import {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import DoublePressable from '../DoublePressable';
import colors from '../../../src/theme/colors.ts';




interface ICarousel {
    images: string[];
}

const Carousel = ({ images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index);
    }
  });

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
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
                activeImageIndex === index ? colors.primary : colors.white,
              borderRadius: 5,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
