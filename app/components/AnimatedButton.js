import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const AnimatedButton = ({name}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          marginHorizontal: 12,
          marginVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <View style={styles.buttonStyle}>
          <Text style={styles.textStyle}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
});
