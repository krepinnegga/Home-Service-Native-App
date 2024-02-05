import { View, FlatList, Image } from 'react-native';
import React from 'react';
import Heading from "../../../Components/Heading";

const BusinessPhotos = ({ business }) => {
  const keyExtractor = (index) => index.toString();

  return (
    <View>
      <Heading text={'Photos'}/>
      <FlatList
        data={business.images}
        numColumns={2} 
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }}
            style={{ width: '100%', height: 120, flex:1, borderRadius:15, margin:7 }}
          />
        )}
      />
    </View>
  );
}

export default BusinessPhotos;

