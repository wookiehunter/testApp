import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colours} from '../utils/colours.js';
import {sizes} from '../utils/sizes.js';

export const Intro = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello! is it me you're looking for...?'</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    paddingTop: sizes.lg,
  },
  text: {
    color: colours.orange,
    fontWeight: '600',
    fontSize: sizes.md,
    textAlign: 'center',
  },
});
