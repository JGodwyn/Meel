import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function TabBar({
  profile = false,
  home = false,
  tips = false,
}) {
  return (
    <View style={styles.container}>
      {profile ? (
        <Image
          style={styles.icon}
          source={require('../assets/icons/Profile_dark.png')}
        />
      ) : (
        <Image
          style={styles.icon}
          source={require('../assets/icons/Profile_light.png')}
        />
      )}

      {home ? (
        <Image
          style={styles.icon}
          source={require('../assets/icons/Home_dark.png')}
        />
      ) : (
        <Image
          style={styles.icon}
          source={require('../assets/icons/Home_light.png')}
        />
      )}

      {tips ? (
        <Image
          style={styles.icon}
          source={require('../assets/icons/Tips_dark.png')}
        />
      ) : (
        <Image
          style={styles.icon}
          source={require('../assets/icons/Tips_light.png')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 56,
    elevation: 20,
    shadowColor: colors.gray4,
    shadowOffset: { height: -16 },
    shadowOpacity: 1,
    shadowRadius: 8,
    backgroundColor: colors.white,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

