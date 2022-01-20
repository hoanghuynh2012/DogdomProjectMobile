import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {images} from '@assets/images';
import FastImage from 'react-native-fast-image'

const LaunchScreen = ({navigation}) => {

  React.useEffect(() => {
    let goToOnBoarding = setTimeout(
      () => navigation.replace('LoginScreen'),
      1000,
    );
    return () => {
      clearTimeout(goToOnBoarding);
    };
  },[navigation])

  return (
    <View style={styles.container}>
      <View
        style={styles.body}>
        <FastImage source={images.dogdom} style={styles.image} />
      </View>
    </View>
  );
};

export default LaunchScreen;
