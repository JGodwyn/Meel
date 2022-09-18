import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import Font from '../../components/Font';

export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        rightIcon={false}
        pressBack={() => navigation.navigate('CollectCategories')}
      />
      <View style={styles.content}>
        <View style={styles.subContainer} activeOpacity={0.7}>
          <TouchableOpacity activeOpacity={0.7} style={{ marginBottom: 16 }}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/MeelTapToSuggest.png')}
            />
          </TouchableOpacity>
          <Font
            text="Hold for 2 seconds to get a suggestion"
            justifyCenter={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  subContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '50%',
  },
  content: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  icon: {
    width: 176,
    height: 176,
  },
});

