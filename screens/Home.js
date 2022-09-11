import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

