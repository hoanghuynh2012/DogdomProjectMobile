import {StyleSheet} from 'react-native';
import {Colors, Insets } from '@styles';
import {scaleWidth, scaleHeight} from '@utils/func';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    flexDirection: 'column',
  },
  body:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleWidth(750),
  },
  image:{
    height: scaleHeight(53),
    width: scaleWidth(145),
  }
});
export default styles;