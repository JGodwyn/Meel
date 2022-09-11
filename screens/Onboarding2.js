import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function Onboarding1({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipText}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={{ fontFamily: 'jakarta-bold' }}>Skip</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/Images/Onboarding/Personalized.png')}
        style={styles.image}
      />
      <Text style={styles.headerBold}>Personalized</Text>
      <Text style={styles.paragraph}>
        We consider your preference before suggesting meals
      </Text>
      {/* the next  */}
      <TouchableOpacity
        style={styles.onboardingButton}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Onboarding3')}
      >
        <Text style={{ color: colors.white }}>Next</Text>
      </TouchableOpacity>
      <IndicatorWrapper />
    </View>
  );
}

const IndicatorWrapper = () => (
  <View
    style={{
      flexDirection: 'row',
      position: 'absolute',
      bottom: 40,
      justifyContent: 'space-around',
    }}
  >
    <View style={styles.indicators}></View>
    <View
      style={[styles.indicators, { backgroundColor: colors.brandOrange }]}
    ></View>
    <View style={styles.indicators}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerBold: {
    fontSize: 26,
    fontFamily: 'jakarta-bold',
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  indicators: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray,
    margin: 4,
  },

  onboardingButton: {
    position: 'absolute',
    bottom: 80,
    width: 312,
    height: 64,
    padding: 10,
    backgroundColor: colors.brandOrange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },

  paragraph: {
    width: 200,
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 24,
  },

  skipText: {
    position: 'absolute',
    top: 80,
    right: 20,
  },
});

