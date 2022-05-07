import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function MeelButton({ text, press, position, bottom, width }) {
  return (
    <TouchableOpacity
      style={[
        styles.onboardingButton,
        { bottom: bottom, width: width, position: position },
      ]}
      activeOpacity={0.7}
      onPress={press}
    >
      <Text style={{ color: colors.white }}>{text} </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  onboardingButton: {
    position: 'absolute',
    height: 64,
    padding: 10,
    backgroundColor: colors.brandOrange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
