import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {colours} from '../utils/colours.js';
import {sizes} from '../utils/sizes.js';

export const Intro = () => (
  <>
    <View style={styles.container}>
      <Text style={styles.text}>Hello! is it me you're looking for...?'</Text>
    </View>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tell me the truth...!"
        placeholderTextColor={colours.green}
      />
    </View>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../images/typeWriter.jpg')}
      />
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.lg,
    alignItems: 'center',
  },
  text: {
    color: colours.orange,
    fontWeight: '600',
    fontSize: sizes.md,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: 300,
    padding: 15,
    borderColor: colours.orange,
    borderWidth: 2,
  },
  image: {
    width: 500,
    height: 500,
    marginTop: 20,
  },
});
