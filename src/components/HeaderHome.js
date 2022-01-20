import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import React from 'react';
import {Colors, Insets, Fonts} from '@styles';
import {CustomIcon} from '@components';
import {scaleWidth, scaleHeight} from '@utils/func';
import TextInputSearch from './TextInputSearch';

export const HeaderHome = () => {
  const translateX = React.useRef(new Animated.Value(0)).current;
  const width = React.useRef(new Animated.Value(0)).current;
  const [position, setPosition] = React.useState([]);

  React.useEffect(() => {
    console.log(position)
    if (position.length >= 2) {
      changeAnimation('left');
    }
  }, [position]);

  const changeAnimation = val => {
    Animated.timing(translateX, {
      toValue: position[val === 'left' ? 0 : 1]?.[val]?.x - scaleWidth(9) || 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(width, {
      toValue: position[val === 'left' ? 0 : 1]?.[val]?.width || 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{margin: scaleWidth(9), opacity: 0}}>
          <CustomIcon name="Message-white" size={24} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{marginRight: scaleWidth(19)}}
            onLayout={event => {
              event.target.measure((x, y, width, height, pageX, pageY) => {
                setPosition(prevState => [
                  ...prevState,
                  {left: {x: pageX, width: width}},
                ]);
              });
            }}>
            <TouchableOpacity onPress={() => changeAnimation('left')}>
              <Text style={styles.text}>Select</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{marginLeft: scaleWidth(19)}}
            onLayout={event => {
              event.target.measure((x, y, width, height, pageX, pageY) => {
                setPosition(prevState => [
                  ...prevState,
                  {right: {x: pageX, width: width}},
                ]);
              });
            }}>
            <TouchableOpacity onPress={() => changeAnimation('right')}>
              <Text style={styles.text}>Discover</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={{margin: scaleWidth(9)}}>
            <CustomIcon name="Message-white" size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.icon,
          {
            width: width,
            transform: [
              {
                translateX: translateX,
              },
            ],
          },
        ]}></Animated.View>
        <TextInputSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.WHITE,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: scaleHeight(49),
  },
  text: {
    ...Fonts.MEDIUM_17,
  },
  icon: {
    width: scaleWidth(70),
    height: scaleHeight(5),
    borderColor: Colors.BLACK,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: Colors.RED,
  },
});
