import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function OnboardingButton({ location, text }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => {
        location;
      }}
    >
      <Text style={{ color: colors.white }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 64,
    padding: 10,
    backgroundColor: colors.brandOrange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
