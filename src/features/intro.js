import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
import {Truth} from '../components/truth.js';
import {Typewriter} from '../components/typewriter.js';
import {colours} from '../utils/colours.js';
import {sizes} from '../utils/sizes.js';

export const Intro = () => (
  <>
    <View style={styles.container}>
      <Subheading style={styles.text}>
        Hello! is it me you're looking for...?'
      </Subheading>
    </View>
    <Truth />
    <Typewriter />
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
