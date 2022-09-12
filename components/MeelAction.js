import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function MeelAction() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Image
        style={styles.icon}
        source={require('../assets/icons/MeelActionIcon.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brandOrange,
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 100,
    bottom: 80,
    right: 24,
  },

  icon: {
    width: 32,
    height: 32,
  },
});

