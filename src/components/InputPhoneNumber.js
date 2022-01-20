import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {scaleWidth, scaleHeight} from '@utils/func';
import {Fonts, Colors} from '@styles';

export const InputPhoneNumber = () => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType='numeric'
        placeholder="Enter phone number"
        style={styles.textInput}
        placeholderTextColor={Colors.WHITE}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(339),
    height: scaleHeight(60),
    backgroundColor: 'rgba(255, 255, 255,0.25)',
    borderRadius: 71,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleHeight(60),
  },
  textInput: {
    ...Fonts.MEDIUM_17,
    color: Colors.WHITE,
  },
});
