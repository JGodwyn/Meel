import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import colors from '../../config/colors';
import Font from '../../components/Font';
import MeelButton from '../../components/MeelButton';

export default function CollectCategories({ navigation }) {
  const [allergyButton, setAllergyButton] = React.useState(false);
  const [vegetarianButton, setVegetarianButton] = React.useState(false);
  const [specialDiet, setSpecialDiet] = React.useState(false);
  const [medCondition, setMedCondition] = React.useState(false);

  const ButtonSelect = ({ text, state, press }) =>
    state ? (
      <TouchableOpacity
        style={styles.buttonSelected}
        activeOpacity={0.7}
        onPress={press}
      >
        <Font text={text} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.buttonUnselected}
        activeOpacity={0.7}
        onPress={press}
      >
        <Font text={text} />
      </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        rightIcon={false}
        pressBack={() => navigation.navigate('CollectLocation')}
      />
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
            source={require('../../assets/icons/Category.png')}
          />
          <Font text="Any of the following?" size="H4" />
        </View>
        {/* <Font text="Click as much as possible" /> */}

        <View
          style={{
            marginBottom: 16,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            // flexShrink: 1,
          }}
        >
          <ButtonSelect
            text="Allergy"
            state={allergyButton}
            press={() => setAllergyButton(!allergyButton)}
          />

          <ButtonSelect
            text="Vegetarian"
            state={vegetarianButton}
            press={() => setVegetarianButton(!vegetarianButton)}
          />

          <ButtonSelect
            text="Special diet"
            state={specialDiet}
            press={() => setSpecialDiet(!specialDiet)}
          />

          <ButtonSelect
            text="Medical condition"
            state={medCondition}
            press={() => setMedCondition(!medCondition)}
          />
        </View>

        <View style={{ width: '100%', marginTop: 16 }}>
          <MeelButton
            text="Done"
            press={() => {
              navigation.navigate('MainScreen');
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

  buttonSelected: {
    backgroundColor: colors.sinopiaOrange,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 16,
  },

  buttonUnselected: {
    backgroundColor: '#fff',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: colors.brandOrange,
    borderWidth: 1,
    marginRight: 16,
  },
});

