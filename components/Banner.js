import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

let north_Icon = require('../assets/icons/North_Icon.png');
let heart_Icon = require('../assets/icons/Heart_icon.png');

export default function Banner({ title, subtitle, color, icon }) {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={[styles.container, { backgroundColor: color }]}>
        {icon === 'heart_Icon' ? (
          <Image style={styles.icon} source={heart_Icon} />
        ) : (
          <Image style={styles.icon} source={north_Icon} />
        )}
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={[styles.body, { opacity: 0.5 }]}>{title}</Text>
          <Text style={styles.body}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    padding: 16,
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 20,
    shadowColor: colors.gray4,
    shadowOffset: { height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    marginBottom: 24,
  },

  body: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'jakarta-bold',
  },

  icon: {
    width: 56,
    height: 56,
    marginRight: 16,
    resizeMode: 'contain',
  },
});

