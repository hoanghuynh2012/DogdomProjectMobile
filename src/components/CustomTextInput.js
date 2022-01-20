import {Colors, Fonts} from '@styles';
import {scaleSize} from '@utils/func';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const CustomTextInput = props => {
  return (
    <View style={style.container}>
      <TextInput
        allowFontScaling={true}
        maxFontSizeMultiplier={1.3}
        style={[style.styleTextInput, props.styleTextInput]}
        placeholderTextColor={Colors.Gray_80}
        placeholder={props.placeholder}
        onChangeText={text => props.onChangeText(text)}
        value={props.value}
        editable={props.visible}
        keyboardType={props.keyboardType}
        onSubmitEditing={
          props.onSubmits != undefined ? () => props.onSubmits() : () => null
        }
        {...props}
      />
      {props.password ? (
        <TouchableOpacity
          style={style.btnHidePassword}
          onPress={() => props.hidePassword && props.hidePassword()}>
          <Icon name="eye-closed" size={scaleSize(19)} color={Colors.Gray} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomTextInput;
const style = StyleSheet.create({
  
});
