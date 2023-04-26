import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';


interface ICarousel {
    images: string[];
}

const Carousel = ({ images }: ICarousel) => {
    const {width} = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
              )}              
             horizontal
              pagingEnabled
   />
    </View>
  );
}

export default Carousel;
