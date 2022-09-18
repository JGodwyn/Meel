import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function Textbox({ placeholder, type, action, value }) {
  // type can be email, text or number
  let keyboardType = 'default'; // default keyboardType
  if (type === 'email') keyboardType = 'email-address';
  if (type === 'number') keyboardType = 'number-pad';

  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      keyboardType={keyboardType}
      onChangeText={action}
      defaultValue={value}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'jakarta-regular',
    fontSize: 14,
    padding: 10,
    marginBottom: 8,
    width: '100%',
    height: 56,
    borderRadius: 8,
    backgroundColor: colors.gray2,
  },
});

