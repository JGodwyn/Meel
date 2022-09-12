import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Font from './Font';

export default function ListComponent({
  title = 'Title',
  subtitle = 'Subtitle',
  //   color = colors.gray,
  image = '',
  rightIcon = true,
}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      {/* if there is no image, leave that place empty */}
      {image === '' ? (
        ''
      ) : (
        <Image style={styles.image} source={{ uri: image }} />
      )}

      <View
        style={{ flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Font text={title} />
        <Font text={subtitle} size="Caption" color={colors.gray4} />
      </View>
      {rightIcon ? (
        <Image
          style={styles.rightIcon}
          source={require('../assets/icons/Forward_arrow.png')}
        />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.gray2,
    padding: 16,
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'flex-start',
    marginBottom: 16,
  },

  image: {
    width: 64,
    height: 40,
    resizeMode: 'contain',
    marginRight: 16,
    borderRadius: 8,
  },

  rightIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    position: 'absolute',
    right: 16,
    alignSelf: 'center',
  },
});

