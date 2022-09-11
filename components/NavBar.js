import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../assets/icons/back_arrow.png/')}
          style={styles.iconLeft}
        />
      </TouchableOpacity>
      <Image
        source={require('../assets/icons/Meel_full_icon.png')}
        style={styles.iconImage}
      />

      <TouchableOpacity>
        <Image
          source={require('../assets/icons/Notification.png')}
          style={styles.iconRight}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    // backgroundColor: colors.gray2,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },

  iconImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  iconLeft: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    right: 12,
    // marginRight: 56,
  },

  iconRight: {
    width: 32,
    height: 32,
    left: 12,
    // marginLeft: 48,
  },
});

