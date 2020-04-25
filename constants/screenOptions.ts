import COLORS from './colors';
import { Platform } from 'react-native';

export default {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.colorPrimary : COLORS.colorWhite,
    },
    headerTintColor: Platform.OS === 'android' ? COLORS.colorWhite : COLORS.colorPrimary,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
};