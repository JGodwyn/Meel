import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import colors from '../../config/colors';
import Font from '../../components/Font';
import MeelButton from '../../components/MeelButton';
import Modal from 'react-native-modal';
import Textbox from '../../components/Textbox';
import ModalSuggestion from '../../components/ModalSuggestion';

export default function CollectCategories({ navigation }) {
  // to handle the button being highlighted or not
  const [allergyButton, setAllergyButton] = React.useState(false);
  const [vegetarianButton, setVegetarianButton] = React.useState(false);
  const [specialDietButton, setSpecialDietButton] = React.useState(false);
  const [medConditionButton, setMedConditionButton] = React.useState(false);

  // to handle the text entered in the modal
  const [vegetarianText, setVegetarianText] = React.useState('');
  const [specialDietText, setSpecialDietText] = React.useState('');
  const [allergyText, setAllergyText] = React.useState('');
  const [medConditionText, setMedConditionText] = React.useState('');

  // to handle visibility of the modal
  const [isAllergyModalVisible, setAllergyModalVisible] = React.useState(false);
  const toggleAllergyModal = () => {
    setAllergyModalVisible(!isAllergyModalVisible);
  };

  const [isVegetarianModalVisible, setVegetarianModalVisible] =
    React.useState(false);
  const toggleVegetarianModal = () => {
    setVegetarianModalVisible(!isVegetarianModalVisible);
  };

  const [isSpecialDietModalVisible, setSpecialDietModalVisible] =
    React.useState(false);
  const toggleSpecialDietModal = () => {
    setSpecialDietModalVisible(!isSpecialDietModalVisible);
  };

  const [isMedConditionModalVisible, setMedConditionModalVisible] =
    React.useState(false);
  const toggleMedConditionModal = () => {
    setMedConditionModalVisible(!isMedConditionModalVisible);
  };

  // the highlight buttons
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

      {/* If I am creating this as a component, I need to account for the header, the action for the button*/}
      {/* I might have to create a lot of component modals for various instances */}

      <ModalSuggestion
        isVisible={isAllergyModalVisible}
        header="Allergy"
        close={toggleAllergyModal}
        defaultValue={allergyText}
        textInput={(text) => setAllergyText(text)}
        onSubmit={() => {
          if (allergyText === '') {
            setAllergyButton(false);
            toggleAllergyModal();
          } else {
            setAllergyButton(true);
            toggleAllergyModal();
          }
        }}
      />

      <ModalSuggestion
        isVisible={isVegetarianModalVisible}
        header="Vegetarian"
        close={toggleVegetarianModal}
        defaultValue={vegetarianText}
        textInput={(text) => setVegetarianText(text)}
        onSubmit={() => {
          if (vegetarianText === '') {
            setVegetarianButton(false);
            toggleVegetarianModal();
          } else {
            setVegetarianButton(true);
            toggleVegetarianModal();
          }
        }}
      />

      <ModalSuggestion
        isVisible={isSpecialDietModalVisible}
        header="Special diet"
        close={toggleSpecialDietModal}
        defaultValue={specialDietText}
        textInput={(text) => setSpecialDietText(text)}
        onSubmit={() => {
          if (specialDietText === '') {
            setSpecialDietButton(false);
            toggleSpecialDietModal();
          } else {
            setSpecialDietButton(true);
            toggleSpecialDietModal();
          }
        }}
      />

      <ModalSuggestion
        isVisible={isMedConditionModalVisible}
        header="Medical condition"
        close={toggleMedConditionModal}
        defaultValue={medConditionText}
        textInput={(text) => setMedConditionText(text)}
        onSubmit={() => {
          if (medConditionText === '') {
            setMedConditionButton(false);
            toggleMedConditionModal();
          } else {
            setMedConditionButton(true);
            toggleMedConditionModal();
          }
        }}
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
          {/* what I need to do is show the modal on click */}
          {/* if an entry is provided, the button turns on and the person can proceed */}
          {/* after the person has entered the details, the button changes to another color to show data entry */}
          {/* clicking it again will uncheck the button and remove what the person has previously entered */}
          {/* Pressing the quit button on the modal will close the modal */}

          <ButtonSelect
            text="Allergy"
            state={allergyButton}
            press={toggleAllergyModal}
          />

          <ButtonSelect
            text="Vegetarian"
            state={vegetarianButton}
            press={toggleVegetarianModal}
          />

          <ButtonSelect
            text="Special diet"
            state={specialDietButton}
            press={toggleSpecialDietModal}
          />

          <ButtonSelect
            text="Medical condition"
            state={medConditionButton}
            press={toggleMedConditionModal}
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

  modal: {
    // flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    width: '90%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

