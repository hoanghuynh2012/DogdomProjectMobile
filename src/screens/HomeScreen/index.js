import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {HeaderHome} from '@components';
import FastImage from 'react-native-fast-image';
import {images} from '@assets/images';
import {scaleWidth, scaleHeight} from '@utils/func';
// import {  } from 'react-native-gesture-handler'
import {CustomIcon} from '@components';
import Colors from '../../styles/color';

const dataBanner = [
  {
    title: 'Take me home 1',
    content: 'Take care of stray dogs, please  take them home.',
    image: images.banner1,
  },
  {
    title: 'Take me home 2',
    content: 'Please take me home.',
    image: images.banner2,
  },
];
const DATA = [
  {
    title: 'Adwords Keyword Research For Beginners.',
    image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    like: 5233,
    comment: 168,
    share: 5233,
    username: 'Jerry',
    avatar: images.avatar,
    device: 'Golden Retriever · Mobile ',
  },
  {
    title:
      'With golden retriever together of the day is always short, soon to the New Year, leave you in the city.',
    image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    like: 5233,
    comment: 168,
    share: 5233,
    username: 'Jerry',
    avatar: images.avatar,
    device: 'Golden Retriever · Mobile ',
  },
  {
    title:
      'With golden retriever together of the day is always short, soon to the New Year, leave you in the city. 1',
    image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    like: 5233,
    comment: 168,
    share: 5233,
    username: 'Jerry',
    avatar: images.avatar,
    device: 'Golden Retriever · Mobile ',
  },
];

const renderBanners = () => {
  return (
    <ScrollView
      style={styles.banner}
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}>
      {dataBanner.map(val => {
        return (
          <ImageBackground
            key={val.title}
            source={val.image}
            style={styles.imageBanner}
            imageStyle={{borderRadius: 10}}>
            <View style={styles.contentBanner}>
              <Text style={styles.titleBanner}>{val.title}</Text>
              <Text style={[styles.textBanner, {marginTop: 4, width: 173}]}>
                {val.content}
              </Text>
              <TouchableOpacity style={styles.buttonBanner}>
                <Text style={[styles.textBanner, {color: 'white'}]}>
                  Let me
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );
      })}
    </ScrollView>
  );
};
const renderPost = ({item}) => {
  return (
    <View style={{marginTop: 30}}>
      <View style={styles.headerCard}>
        <FastImage
          source={item.avatar}
          style={styles.avatar}
          resizeMode={'cover'}
        />
        <Text style={styles.usernameCard}>{item.username}</Text>
        <TouchableOpacity style={styles.buttonFollow}>
          <Text style={{color: 'white'}}>Follow</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.contentCard}>{item.title}</Text>
      <View>
        <FastImage
          resizeMode={'cover'}
          source={{uri: item.image}}
          style={styles.imageCard}
        />
      </View>
      <View style={styles.footerCard}>
        <CustomIcon name="Like-white" size={18} color={Colors.GRAY_55} />
        <Text style={styles.textFooter}>{item.like}</Text>
        <CustomIcon
          name="Comments"
          size={18}
          color={Colors.GRAY_55}
          style={{marginLeft: 24}}
        />
        <Text style={styles.textFooter}>{item.comment}</Text>
        <CustomIcon
          name="Share"
          size={18}
          color={Colors.GRAY_55}
          style={{marginLeft: 24}}
        />
        <Text style={styles.textFooter}>{item.share}</Text>
        <CustomIcon
          name="More-x"
          size={24}
          color={Colors.GRAY_55}
          style={{marginRight: 24}}
        />
      </View>
    </View>
  );
};
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderHome />
      </View>
      <View style={styles.body}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <FastImage source={images.ranking} style={styles.icon} />
            <Text style={styles.titleIcon}>Ranking</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <FastImage
              source={images.interlocution}
              style={[
                styles.icon,
                {width: scaleWidth(27), height: scaleHeight(28)},
              ]}
            />
            <Text style={styles.titleIcon}>Discuss</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <FastImage
              source={images.surrounding}
              style={[
                styles.icon,
                {width: scaleWidth(24), height: scaleHeight(27)},
              ]}
            />
            <Text style={styles.titleIcon}>Surrounding</Text>
          </View>
        </View>
        <FlatList
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderPost}
          keyExtractor={item => item.title}
          ListHeaderComponent={renderBanners}
        />
        {/* <FlatList
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderPost}
          keyExtractor={item => item.title}
        /> */}
      </View>
    </View>
  );
};

export default HomeScreen;
