import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {scaleWidth, scaleHeight} from '@utils/func';
import {Fonts, Colors} from '@styles';

export const Button = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
        width: scaleWidth(339),
        height: scaleHeight(60),
        backgroundColor: Colors.RED,
        borderRadius: 71,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleHeight(16),
    },
    text: {
        ...Fonts.MEDIUM_17,
        color: Colors.WHITE,
        paddingHorizontal: scaleHeight(18),
    }
});
