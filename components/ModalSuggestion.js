import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Font from './Font';
import colors from '../config/colors';
import Textbox from './Textbox';
import MeelButton from './MeelButton';

export default function ModalSuggestion({
  isVisible,
  header,
  onSubmit,
  close,
  textInput,
  defaultValue,
}) {
  // const [isModalVisible, setModalVisible] = React.useState(false);
  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  return (
    // what you need to do for this component to work is to
    // pass a header text and then a function that handles what
    // is to be done when the user commits his changes
    // yo also need to define a state in the file that calls this function
    // that state will handle when it shows and hides

    <Modal isVisible={isVisible}>
      <View style={styles.modal}>
        <Font text={header} size="H5" color={colors.darkest_brand} />
        <TouchableOpacity
          style={{ top: 16, right: 8, position: 'absolute' }}
          onPress={close}
        >
          <Image
            style={styles.icon}
            source={require('../assets/icons/Close.png')}
          />
        </TouchableOpacity>
        <View style={{ marginBottom: 16, width: '100%' }}>
          <Textbox
            placeholder="Type here"
            action={textInput}
            value={defaultValue}
          />
        </View>

        {/* clicking the done button will push the entry to an array */}
        {/* also remember that this should close the modal also */}
        <MeelButton text="Done" press={onSubmit} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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

  icon: {
    width: 32,
    height: 32,
    marginTop: 4,
    resizeMode: 'contain',
    marginRight: 8,
  },
});

