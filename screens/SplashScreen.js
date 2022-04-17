import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/icons/meel_logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 80,
    height: 80,
  },
});
