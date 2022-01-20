import {Dimensions} from 'react-native';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

export const scaleWidth = size => wp((size * 100) / width  + '%');
export const scaleHeight = size => hp((size * 100) / height + '%');
export const scaleFont = size => RFValue(size);
