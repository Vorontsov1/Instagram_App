import React from 'react';
import { FlatList, Image, SafeAreaView } from 'react-native';
import FeedGridItem from './FeedGridItem';


interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null | undefined;
}


const FeedGridView = ({data,  ListHeaderComponent}: IFeedGridView)  => {
 return (
   <SafeAreaView>
     <FlatList
       data={data}
       renderItem={({item}) => <FeedGridItem post={item} />}
       numColumns={3}
       showsVerticalScrollIndicator={false}
             ListHeaderComponent={ListHeaderComponent}
             style={{marginHorizontal: -1,}}
     />
   </SafeAreaView>
 );
}

export default FeedGridView;
