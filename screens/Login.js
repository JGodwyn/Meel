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

export default function Login({ navigation }) {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/Meel_full_icon.png')}
        style={styles.iconImage}
      />
      <Text style={styles.headerBold}>Welcome back</Text>
      <View>
        <TextInput
          placeholder="Email address"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />

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
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'flex-start',
          paddingLeft: 36,
          flexDirection: 'row',
          marginTop: 10,
        }}
        activeOpacity={0.7}
      >
        <Text>Forgot password?</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 40 }}>
        <MeelButton text="Login" press={() => {}} width={340} />
      </View>

      <Text
        style={{
          position: 'absolute',
          bottom: 20,
          fontFamily: 'Inter_700Bold',
        }}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        Don't have an account? Create one
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
    marginBottom: 16,
    width: 340,
    borderRadius: 8,
    backgroundColor: colors.gray2,
  },
});
