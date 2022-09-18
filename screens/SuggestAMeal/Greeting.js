// show this message for the first time user
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import NavBar from '../../components/NavBar';
import Font from '../../components/Font';
import colors from '../../config/colors';
import MeelButton from '../../components/MeelButton';

export default function Greeting({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar rightIcon={false} pressBack={() => navigation.navigate('Home')} />
      <View style={styles.subContainer}>
        <View style={styles.content}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/Congrat.png')}
          />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Font size="H4" text="Congrats🎉" color={colors.darkest_brand} />
            <Text style={{ textAlign: 'center', marginBottom: 32 }}>
              Since this is your first time, I would love to know a bit about
              you
            </Text>
            <MeelButton
              text="Continue"
              press={() => {
                navigation.navigate('CollectAge');
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { width: '80%', alignItems: 'center' },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flex: 1,
  },

  icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 24,
  },
});

