import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const PlaylistTiles = ({imageSource, title, subTitle}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={imageSource} style={styles.image} />
          <View>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.subText}>{subTitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistTiles;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    margin: 10,
  },
  text: {
    color: 'white',
  },
  subText: {
    color: 'grey',
  },
  container: {
    width: 400,
  },
});
