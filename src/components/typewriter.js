import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {sizes} from '../utils/sizes.js';

export const Typewriter = () => (
  <View style={styles.container}>
    <Image style={styles.image} source={require('../images/typeWriter.jpg')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 500,
    marginTop: 20,
  },
});
