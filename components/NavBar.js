import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function NavBar({
  rightIcon = true,
  leftIcon = true,
  pressNotification,
  pressBack,
}) {
  return (
    <View style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity onPress={pressBack}>
          <Image
            source={require('../assets/icons/back_arrow.png')}
            style={styles.iconLeft}
          />
        </TouchableOpacity>
      ) : (
        <Text> </Text>
      )}

      <Image
        source={require('../assets/icons/Meel_full_icon.png')}
        style={styles.iconImage}
      />

      {rightIcon ? (
        <TouchableOpacity onPress={pressNotification}>
          <Image
            source={require('../assets/icons/Notification.png')}
            style={styles.iconRight}
          />
        </TouchableOpacity>
      ) : (
        <Text> </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    // backgroundColor: colors.gray2,
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'center',
  },

  iconImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  iconLeft: {
    position: 'absolute',
    width: 32,
    height: 32,
    // marginRight: 48,
    top: -16,
    left: -152,
  },

  iconRight: {
    position: 'absolute',
    width: 32,
    height: 32,
    // marginLeft: 48
    top: -16,
    right: -152,
  },
});

