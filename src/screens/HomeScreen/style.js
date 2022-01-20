import {StyleSheet} from 'react-native';
import {Colors, Insets, Fonts } from '@styles';
import {scaleWidth, scaleHeight} from '@utils/func';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    flexDirection: 'column',
  },
  header: {
   marginTop: Insets.TOP,
   paddingHorizontal: scaleWidth(9),
  },
  icon:{
    width: scaleWidth(27),
    height: scaleHeight(25)
  },
  titleIcon: {
    ...Fonts.REGULAR_13,
    marginTop: scaleHeight(10),
    textAlign: 'center'
  },
  body:{
    flexDirection: 'column',
    flex:1,
    margin: scaleWidth(18)
  },
  banner: {
    marginRight: scaleWidth(10),
    marginTop: scaleHeight(10),
    flexDirection: 'row',
  },
  imageBanner: {
    width: scaleWidth(339),
    height: scaleHeight(190),
    marginRight: scaleWidth(10),
   
  },
  buttonBanner:{
    backgroundColor: Colors.BLACK,
    width: scaleWidth(80),
    height: scaleHeight(28),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleHeight(16)
  },
  titleBanner: {
    ...Fonts.SEMIBOLD_24,
  },
  contentBanner: {
    marginTop: scaleHeight(38),
    marginLeft: scaleHeight(24),
  },
  textBanner: {
    ...Fonts.REGULAR_13,
  },
  headerCard: {
    flexDirection: 'row',
    height: scaleHeight(30),
    alignItems: 'center',
  },
  avatar: {
    width: scaleWidth(30),
    height: scaleHeight(30),
    borderRadius: 50,
  },
  usernameCard: {
    ...Fonts.REGULAR_16,
    width: scaleWidth(220),
    marginLeft: scaleWidth(10)
  },
  buttonFollow:{
    marginLeft: scaleWidth(10),
    backgroundColor: Colors.RED,
    width: scaleWidth(70),
    height: scaleHeight(28),
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  imageCard: {
    width: scaleWidth(339),
    height: scaleHeight(200),
    borderRadius: 10,
  },
  textFollow: {
    color: 'white',
    ...Fonts.REGULAR_12
  },
  contentCard: {
    ...Fonts.REGULAR_15,
    marginTop: scaleHeight(15),
    color: Colors.BLACK_70,
    marginBottom: scaleHeight(10),
  },
  footerCard:{
    marginTop: scaleHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFooter: {
    ...Fonts.REGULAR_15,
    color: Colors.GRAY_55,
    marginLeft: scaleWidth(5)
  }

});
export default styles;