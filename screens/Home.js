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

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        leftIcon={false}
        pressNotification={() => navigation.navigate('Notifications')}
      />
      <View style={styles.subContainer}>
        <View style={styles.greetingCard}>
          <Image
            style={styles.profile}
            source={require('../assets/Images/icon.png')}
          />
          <Text style={styles.h4}>Hi, Godwyn</Text>
        </View>

        <Banner
          title="Health tip"
          subtitle=" Exercise is great for your health - here is why!"
          color={colors.blue}
          icon="heart_Icon"
        />

        <Font
          size="H5"
          text="Your recent actions"
          color={colors.darkest_brand}
        />

        <ScrollView orientation="vertical" showsVerticalScrollIndicator={false}>
          {/* just to simulate a list */}
          <ListComponent
            title="Eggs and noodles"
            subtitle="We suggested lunch for you"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/HummusBowl-65a0050.jpg"
          />

          <ListComponent
            title="Eggs and noodles"
            subtitle="We suggested lunch for you"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/HummusBowl-65a0050.jpg"
          />

          <ListComponent
            title="Eggs and noodles"
            subtitle="We suggested lunch for you"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/HummusBowl-65a0050.jpg"
          />

          <ListComponent
            title="Eggs and noodles"
            subtitle="We suggested lunch for you"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/HummusBowl-65a0050.jpg"
          />

          <ListComponent
            title="Eggs and noodles"
            subtitle="We suggested lunch for you"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/HummusBowl-65a0050.jpg"
          />

          <ListComponent
            title="Eggs and noodles"
            subtitle="We suggested lunch for you"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/HummusBowl-65a0050.jpg"
          />
        </ScrollView>
      </View>
      <MeelAction />
      <TabBar home={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },

  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    flex: 1,
    marginBottom: 24,
  },

  h4: {
    fontFamily: 'jakarta-bold',
    fontSize: 18,
  },

  greetingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },

  icon: {
    width: 144,
    height: 144,
    // margin: 24,
    resizeMode: 'contain',
  },

  profile: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
});

