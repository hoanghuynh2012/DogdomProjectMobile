import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {images} from '@assets/images';
import FastImage from 'react-native-fast-image';
import {InputPhoneNumber, Button} from '@components';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background_login}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.body}>
          <FastImage source={images.dogdom_white} style={styles.logo} />
          <InputPhoneNumber />
          <Button>Get Captcha</Button>
          <Text
            style={[
              styles.text,
              {alignSelf: 'flex-start', marginLeft: 35, marginTop: 18},
            ]}>
            Password to Login
          </Text>
          <View style={styles.footer}>
            <Text style={[styles.text]}>
              By signing in, you agree to the User Agreement and Privacy Terms.
            </Text>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
