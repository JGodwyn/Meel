import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import MeelButton from '../components/MeelButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import validator from 'validator';

export default function CreateAccount({ navigation }) {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [acceptTerms, setacceptTerms] = React.useState(false);
  const [validEmailIdentifier, setValidEmailIdentifier] = React.useState(false);
  const [validPasswordIdentifier, setValidPasswordIdentifier] =
    React.useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/Meel_full_icon.png')}
        style={styles.iconImage}
      />
      <Text style={styles.headerBold}>Open account</Text>
      <View>
        <TextInput
          placeholder="Email address"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(newText) => {
            setEmail(newText);
          }}
          defaultValue={email}
        />

        {/* checking for valid email address*/}
        {validEmailIdentifier ? (
          <Text
            style={{
              marginBottom: 16,
              marginTop: 4,
              fontSize: 12,
              color: colors.red,
            }}
          >
            Invalid email address
          </Text>
        ) : (
          <Text> </Text>
        )}

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={hidePassword}
          />

          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <Image
              source={require('../assets/icons/Show.png')}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 16,
                top: -10,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* checking for valid password */}
        {validPasswordIdentifier ? (
          <Text
            style={{
              marginBottom: 16,
              marginTop: 4,
              fontSize: 12,
              color: colors.red,
            }}
          >
            Passwords must be at least 8 characters long
          </Text>
        ) : (
          <Text> </Text>
        )}
      </View>

      <View
        style={{
          alignSelf: 'flex-start',
          paddingLeft: 36,
          flexDirection: 'row',
          marginTop: 8,
        }}
      >
        <BouncyCheckbox
          size={20}
          fillColor={colors.brandOrange}
          iconStyle={{ borderRadius: 8 }}
          // set acceptTerms to true when you tick the checkbox
          onPress={() => {
            setacceptTerms(!acceptTerms);
          }}
        />
        <Text>
          I accept the {''}
          <Text
            style={{
              fontFamily: 'jakarta-semibold',
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              navigation.navigate('Terms');
            }}
          >
            Terms and conditions
          </Text>
        </Text>
      </View>

      <View style={{ marginTop: 40 }}>
        {/* create account button */}
        <MeelButton
          text="Create account"
          press={() => {
            if (
              acceptTerms &&
              password.length > 7 &&
              validator.isEmail(email)
            ) {
              setValidEmailIdentifier(false);
              setValidPasswordIdentifier(false);
              navigation.navigate('Home');
            }

            validator.isEmail(email)
              ? setValidEmailIdentifier(false)
              : setValidEmailIdentifier(true);

            password.length > 7
              ? setValidPasswordIdentifier(false)
              : setValidPasswordIdentifier(true);

            // Display error message only if password and email has been validated
            if (
              (acceptTerms === false) &
              (validEmailIdentifier === false) &
              (validPasswordIdentifier === false)
            ) {
              alert('Accept terms and conditions to continue');
            }
          }}
          width={340}
        />
      </View>

      <Text
        style={{
          position: 'relative',
          fontFamily: 'jakarta-bold',
          marginTop: 20,
        }}
        onPress={() => {
          setValidEmailIdentifier(false);
          setValidPasswordIdentifier(false);
          navigation.navigate('Login');
        }}
      >
        Already have a account, log in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerBold: {
    fontSize: 28,
    fontFamily: 'jakarta-bold',
    marginBottom: 40,
    color: colors.darkest_brand,
  },

  iconImage: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  textInput: {
    fontFamily: 'jakarta-regular',
    fontSize: 14,
    padding: 10,
    marginBottom: 2,
    width: 340,
    borderRadius: 8,
    backgroundColor: colors.gray2,
  },
});

