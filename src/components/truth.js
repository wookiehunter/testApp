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
        {truth && truth.length > 0 ? (
          <Text style={styles.output}>Your truth is: {truth}</Text>
        ) : (
          <Text style={styles.lies}>Lies, lies and more damn lies!!!</Text>
        )}
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
    color: colours.green,
    borderColor: colours.orange,
    borderWidth: 2,
  },
  outputContainer: {
    height: sizes.xxxl,
    justifyContent: 'center',
  },
  output: {
    height: 50,
    width: 300,
    padding: 15,
    color: colours.orange,
    borderColor: colours.green,
    borderWidth: 2,
  },
  lies: {
    color: colours.red,
    fontSize: sizes.lg,
  },
});
