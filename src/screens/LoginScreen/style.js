import {StyleSheet} from 'react-native';
import {Colors,Fonts, Insets } from '@styles';
import {scaleWidth, scaleHeight} from '@utils/func';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    flexDirection: 'column',
  },
  image:{
    width: '100%',
    height: '100%',
  },
  body:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  logo:{
    width: scaleWidth(180),
    height: scaleHeight(66),
    marginTop: scaleHeight(157),
  },
  text:{
    textAlign: 'center',
    color: Colors.WHITE,
    ...Fonts.REGULAR_13,
  },
  footer:{
    width: '80%',
    marginTop: scaleHeight(291),
  }
});
export default styles;