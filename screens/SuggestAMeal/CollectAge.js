import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import colors from '../../config/colors';
import Textbox from '../../components/Textbox';
import Font from '../../components/Font';
import MeelButton from '../../components/MeelButton';

export default function CollectAge({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar rightIcon={false} pressBack={() => navigation.navigate('Home')} />
      <View style={styles.subContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            // backgroundColor: colors.gray,
            justifyContent: 'center',
          }}
        >
          <Image
            style={styles.icon}
            source={require('../../assets/icons/Calendar.png')}
          />
          <Font text="Your age" size="H4" />
        </View>
        <View style={{ marginBottom: 16, width: '70%' }}>
          <Font text="I need this so my suggestions would fit your age bracket" />
        </View>
        <Textbox
          placeholder="Your age"
          type="number"
          action={(item) => {
            console.log(item);
          }}
        />
        <View style={{ width: '100%', marginTop: 16 }}>
          <MeelButton
            text="Continue"
            press={() => {
              navigation.navigate('CollectLocation');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // content: { width: '80%', alignItems: 'center' },

  subContainer: {
    justifyContent: 'flex-start',
    marginTop: 160,
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    flex: 1,
    width: '100%',
  },

  icon: {
    width: 32,
    height: 32,
    marginTop: 4,
    resizeMode: 'contain',
    marginRight: 8,
  },
});

