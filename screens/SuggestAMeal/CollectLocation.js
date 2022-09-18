import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import colors from '../../config/colors';
import Font from '../../components/Font';
import MeelButton from '../../components/MeelButton';

export default function CollectLocation({ navigation }) {
  const [permissionAllowed, setPermissionAllowed] = React.useState(false);
  let granted = '';

  const requestLocationPermission = async () => {
    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('inside permissionAllowed');
        setPermissionAllowed(true);
        // alert('You can use the location');
      } else {
        console.log('permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        rightIcon={false}
        pressBack={() => navigation.navigate('CollectAge')}
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
            source={require('../../assets/icons/Location.png')}
          />
          <Font text="Your location" size="H4" />
        </View>
        <View style={{ marginBottom: 16, width: '70%' }}>
          <Font text="I would love to give ideas on meals close to your destination" />
        </View>
        <View style={{ width: '100%', marginTop: 16 }}>
          <MeelButton
            text="Give access to location"
            press={() => {
              console.log(granted);
              permissionAllowed ? navigation.navigate('CollectCategories') : '';
              requestLocationPermission();
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
});

