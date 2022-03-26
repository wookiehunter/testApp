import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {colours} from '../utils/colours.js';
import {sizes} from '../utils/sizes.js';

export const Truth = () => {
  const [truth, setTruth] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tell me the truth...!"
        placeholderTextColor={colours.green}
        onChangeText={text => setTruth(text)}
      />
      <View style={styles.outputContainer}>
        {truth ? <Text>{truth}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.lg,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    padding: 15,
    borderColor: colours.orange,
    borderWidth: 2,
  },
  outputContainer: {
    height: sizes.xxxl,
    justifyContent: 'center',
  },
});
