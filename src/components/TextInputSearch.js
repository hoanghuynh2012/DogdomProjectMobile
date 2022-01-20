import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTextInput from './CustomTextInput';
import {Colors, Insets, Fonts} from '@styles';
import {CustomIcon} from '@components';
import {scaleWidth, scaleHeight} from '@utils/func';

const TextInputSearch = () => {
  return (
    <View style={styles.container}>
      <CustomIcon
        name="Search-big"
        size={scaleWidth(24)}
        color={Colors.GRAY_25}
        style={styles.iconSearch}
      />
      <CustomTextInput 
        placeholder="Send the sample" 
        style={styles.text} />
      <CustomIcon
        name="Voice-black"
        size={scaleWidth(24)}
        color={Colors.GRAY_55}
        // style={{marginLeft: scaleWidth()}}
      />
    </View>
  );
};

export default TextInputSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: scaleHeight(10),
    height: scaleHeight(46),
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    marginHorizontal: scaleWidth(18),
    borderRadius: 21,
  },
  iconSearch: {
    marginLeft: scaleWidth(15),
  },
  text: {
    ...Fonts.REGULAR_13,
    marginLeft: scaleWidth(8),
    width: scaleWidth(250)
  },
});
