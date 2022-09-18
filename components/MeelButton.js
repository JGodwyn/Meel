import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Font from './Font';

export default function MeelButton({ text, press, size, color }) {
  let styleSize = styles.Medium; // default size of button
  let styleColor = styles.Brand; // default color of button
  let textColor = colors.white; // default color of button text

  if (size === 'Medium') {
    styleSize = styles.Medium;
  } else if (size === 'Big') {
    styleSize = styles.Big;
  } else if (size === 'Small') styleSize = styles.Small;

  if (color === 'Brand') {
    styleColor = styles.Brand;
  } else if (color === 'Alternative') {
    styleColor = styles.Alternative;
    textColor = colors.black;
  } else if (color === 'Success') {
    styleColor = styles.Success;
  } else if (color === 'Danger') {
    styleColor = styles.Danger;
  } else if (color === 'Warning') {
    styleColor = styles.Warning;
    textColor = colors.black;
  }

  return (
    <TouchableOpacity
      style={[styleSize, styleColor]}
      activeOpacity={0.7}
      onPress={press}
    >
      <Font text={text} color={textColor} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  label: {
    fontFamily: 'jakarta-bold',
    color: colors.white,
  },

  Big: {
    height: 64,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 8,
  },

  Medium: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },

  Small: {
    height: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  // color styles

  Brand: {
    backgroundColor: colors.brandOrange,
  },

  Alternative: {
    backgroundColor: colors.sinopiaOrange,
  },

  Success: {
    backgroundColor: colors.green,
  },

  Danger: {
    backgroundColor: colors.red,
  },

  Warning: {
    backgroundColor: colors.amber,
  },
});

