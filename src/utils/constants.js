import {Platform, Dimensions} from 'react-native';

export const OS = Platform.OS;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const ItemSpace = 16