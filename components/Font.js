// this is just to define my text styles
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import React from 'react';

export default function Font({ size, text, color }) {
  // I have a default font style on the app.js (the body)
  // so no need to add the logic for a doctor
  // when no type is specified, it would use that
  // there is a way to curb the whole system load of going
  // conditional statement. You can set the one most likely to be used
  // on the top so you avoid going through all the calls before getting there
  // return after you have gotten each call
  {
    if (size === 'Caption')
      return <Text style={[styles.Caption, { color: color }]}>{text}</Text>;
  }

  {
    if (size === 'H5')
      return <Text style={[styles.H5, { color: color }]}>{text}</Text>;
  }

  {
    if (size === 'H4')
      return <Text style={[styles.H4, { color: color }]}>{text}</Text>;
  }

  {
    if (size === 'H3')
      return <Text style={[styles.H3, { color: color }]}>{text}</Text>;
  }

  {
    if (size === 'H2')
      return <Text style={[styles.H3, { color: color }]}>{text}</Text>;
  }

  {
    if (size === 'H1')
      return <Text style={[styles.H3, { color: color }]}>{text}</Text>;
  }

  return <Text style={[styles.Body, { color: color }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  Caption: {
    fontSize: 12,
    fontFamily: 'jakarta-regular',
    lineHeight: 16,
  },

  Body: {
    // this is not used though
    fontSize: 14,
    fontFamily: 'jakarta-regular',
    lineHeight: 24,
    marginBottom: 4,
  },

  H5: {
    fontSize: 18,
    fontFamily: 'jakarta-bold',
    lineHeight: 32,
    marginBottom: 16,
  },

  H4: {
    fontSize: 22,
    fontFamily: 'jakarta-bold',
    lineHeight: 32,
    marginBottom: 40,
  },

  H3: {
    fontSize: 27,
    fontFamily: 'jakarta-bold',
    lineHeight: 40,
    marginBottom: 40,
  },

  H2: {
    fontSize: 34,
    fontFamily: 'jakarta-bold',
    lineHeight: 48,
  },

  H1: {
    fontSize: 43,
    fontFamily: 'jakarta-bold',
    lineHeight: 56,
  },
});

