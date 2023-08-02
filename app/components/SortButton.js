import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const SortButton = ({title}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default SortButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent', // Set the background color to transparent
    borderRadius: 3,
    marginVertical: 8,
    padding: 8,
    height: 40,
    width: Dimensions.get('window').width * 0.2,
    borderWidth: 0.2, // Add a border to see the transparent effect, you can remove this
    borderColor: '#F5F5F5',
  },
  text: {
    color: 'white',
  },
});
