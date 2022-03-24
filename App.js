/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Intro} from './src/features/intro';

import {colours} from './src/utils/colours.js';
import {sizes} from './src/utils/sizes.js';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar style={styles.container} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>Test App</Text>
          <Intro />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.md,
  },
  title: {
    fontSize: sizes.xxl,
    fontWeight: '900',
    textAlign: 'center',
    paddingTop: sizes.md,
    color: colours.green,
    letterSpacing: -5,
  },
});

export default App;
