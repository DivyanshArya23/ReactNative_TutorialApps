import React from 'react';
import {
  // FlatList
  Text,
  View,
} from 'react-native';
import ImageDetail from '../../components/DemoApp/ImageDetail';

const ImageScreen = function () {
  const data = [
    { title: 'Image Title#1', image: 'forest.jpg' },
    { title: 'Image Title#2', image: 'mountain.jpg' },
    { title: 'Image Title#3', image: 'beach.jpg' },
  ];
  return (
    <View>
      <Text>Image Screen</Text>
      {/* <FlatList
        data={data}
        keyExtractor={(element) => element.title}
        renderItem={({ item }) => {
          return <ImageDetail title={item.title} image={require(`../../assets/beach.jpg`)} />;
        }}
      /> */}
      {/* <ImageDetail
        title={data[0].title}
        image={require(`../../assets/images/forest.jpg`)}
      />
      <ImageDetail
        title={data[1].title}
        image={require(`../../assets/images/mountain.jpg`)}
      />
      <ImageDetail
        title={data[2].title}
        image={require(`../../assets/images/beach.jpg`)}
      /> */}
    </View>
  );
};

export default ImageScreen;
