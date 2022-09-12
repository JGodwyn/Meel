import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import colors from '../config/colors';
import MeelAction from '../components/MeelAction';
import TabBar from '../components/TabBar';
import ListComponent from '../components/ListComponent';
import Font from '../components/Font';

export default function Notifications({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar rightIcon={false} pressBack={() => navigation.navigate('Home')} />
      <ScrollView style={styles.subContainer}>
        <Font size="H4" text="Notifications" color={colors.darkest_brand} />
        {/* Just to simulate a list */}
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <ListComponent title="We sent you a mail" subtitle="5am" />
        <View style={{ alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>
          <Font text="You are up to date" color={colors.gray3} />
        </View>
      </ScrollView>
      <MeelAction />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  subContainer: {
    paddingHorizontal: 16,
    flex: 1,
    marginBottom: 48,
  },
});

