import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function Authentication() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerBold}>Welcome back</Text>
      <View>
        <TextInput placeholder="Email address" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerBold: {
    fontSize: 26,
    fontFamily: 'Inter_700Bold',
    marginBottom: 20,
  },

  textInput: {
    padding: 10,
    margin: 8,
    width: 380,
    borderRadius: 8,
    backgroundColor: colors.gray2,
  },
});
