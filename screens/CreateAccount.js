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
          <Text style={{ marginBottom: 16, fontSize: 14, color: colors.red }}>
            Invalid email address
          </Text>
        ) : (
          <Text> </Text>
        )}

        <View style={[styles.textInput, { flexDirection: 'row' }]}>
          <TextInput
            placeholder="Password"
            style={{ width: 296, fontFamily: 'Inter_400Regular', fontSize: 16 }}
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
              }}
            />
          </TouchableOpacity>
        </View>

        {/* checking for valid password */}
        {validPasswordIdentifier ? (
          <Text style={{ marginBottom: 16, fontSize: 14, color: colors.red }}>
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
          marginTop: 10,
        }}
      >
        <BouncyCheckbox
          size={20}
          fillColor={colors.brandOrange}
          iconStyle={{ borderRadius: 8 }}
          onPress={() => {
            setacceptTerms(!acceptTerms);
          }}
        />
        <Text>
          I accept the{' '}
          <Text
            style={{ color: colors.darkest_brand, fontFamily: 'Inter_700Bold' }}
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
              password.length > 8 &&
              validator.isEmail(email)
            ) {
              setValidEmailIdentifier(true);
              setValidPasswordIdentifier(true);
              navigation.navigate('Home');
            } else {
              if (!acceptTerms) {
                alert('Accept terms and conditions to continue');
              }
              !validator.isEmail(email)
                ? setValidEmailIdentifier(true)
                : setValidEmailIdentifier(false);
              password.length < 8
                ? setValidPasswordIdentifier(true)
                : setValidPasswordIdentifier(false);
            }
          }}
          width={340}
        />
      </View>

      <Text
        style={{
          position: 'absolute',
          bottom: 20,
          fontFamily: 'Inter_700Bold',
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
    fontFamily: 'Inter_700Bold',
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
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    padding: 10,
    marginBottom: 2,
    width: 340,
    borderRadius: 8,
    backgroundColor: colors.gray2,
  },
});
