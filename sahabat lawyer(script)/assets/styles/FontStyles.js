import {StyleSheet} from 'react-native';
import {color} from './ColorList';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {fonts} from '../../utils/Fonts';
const styles = StyleSheet.create({
  // font big
  fontBigBlackBold: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: color.black,
  },
  fontBigBlackSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: color.black,
  },
  fontBigBlackRegular: {
    fontFamily: fonts.primary[400],
    fontSize: 24,
    color: color.black,
  },
  fontBigWhiteBold: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: color.white,
  },
  fontBigWhiteSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: color.white,
  },
  fontBigWhiteRegular: {
    fontFamily: fonts.primary[400],
    fontSize: 24,
    color: color.white,
  },
  fontBigGreyBold: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: color.grey,
  },
  fontBigGreySemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: color.grey,
  },
  fontBigGreyRegular: {
    fontFamily: fonts.primary[400],
    fontSize: 24,
    color: color.grey,
  },
  fontBigYellowBold: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: color.yellow,
  },
  fontBigYellowSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: color.yellow,
  },
  fontBigYellowRegular: {
    fontFamily: fonts.primary[400],
    fontSize: 24,
    color: color.yellow,
  },
  fontBigRedBold: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: color.red,
  },
  fontBigRedSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: color.red,
  },
  fontBigRedRegular: {
    fontFamily: fonts.primary[400],
    fontSize: 24,
    color: color.red,
  },
  // font big
  // font medium
  fontMediumBlackBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.4),
    color: color.black,
  },
  fontMediumBlackSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.4),
    color: color.black,
  },
  fontMediumBlackRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.4),
    color: color.black,
  },
  fontMediumWhiteBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.4),
    color: color.white,
  },
  fontMediumWhiteSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.4),
    color: color.white,
  },
  fontMediumWhiteRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.4),
    color: color.white,
  },
  fontMediumGreyBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.4),
    color: color.grey,
  },
  fontMediumGreySemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.4),
    color: color.grey,
  },
  fontMediumGreyRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.4),
    color: color.grey,
  },
  fontMediumYellowBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.4),
    color: color.yellow,
  },
  fontMediumYellowSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.4),
    color: color.yellow,
  },
  fontMediumYellowRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.4),
    color: color.yellow,
  },
  fontMediumRedBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.4),
    color: color.red,
  },
  fontMediumRedSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.4),
    color: color.red,
  },
  fontMediumRedRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.4),
    color: color.red,
  },
  // font medium
  // font small
  fontSmallBlackBold: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: color.black,
  },
  fontSmallBlackSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.15),
    color: color.black,
  },
  fontSmallBlackRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.15),
    color: color.black,
  },
  fontSmallWhiteBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.15),
    color: color.white,
  },
  fontSmallWhiteSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.15),
    color: color.white,
  },
  fontSmallWhiteRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.15),
    color: color.white,
  },
  fontSmallGreyBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.15),
    color: color.grey,
  },
  fontSmallGreySemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.15),
    color: color.grey,
  },
  fontSmallGreyRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.15),
    color: color.grey,
  },
  fontSmallYellowBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.15),
    color: color.yellow,
  },
  fontSmallYellowSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.15),
    color: color.yellow,
  },
  fontSmallYellowRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.15),
    color: color.yellow,
  },
  fontSmallRedwBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(2.15),
    color: color.red,
  },
  fontSmallRedSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(2.15),
    color: color.red,
  },
  fontSmallRedRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(2.15),
    color: color.red,
  },
  // font small
  // font extra small
  fontExtraSmallBlackBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.95),
    color: color.black,
  },
  fontExtraSmallBlackSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.95),
    color: color.black,
  },
  fontExtraSmallBlackRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.95),
    color: color.black,
  },
  fontExtraSmallWhiteBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.95),
    color: color.white,
  },
  fontExtraSmallWhiteSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.95),
    color: color.white,
  },
  fontExtraSmallWhiteRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.95),
    color: color.white,
  },
  fontExtraSmallGreyBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.95),
    color: color.grey,
  },
  fontExtraSmallGreySemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.95),
    color: color.grey,
  },
  fontExtraSmallGreyRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.95),
    color: color.grey,
  },
  fontExtraSmallYellowBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.95),
    color: color.yellow,
  },
  fontExtraSmallYellowSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.95),
    color: color.yellow,
  },
  fontExtraSmallYellowRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.95),
    color: color.yellow,
  },
  fontExtraSmallRedwBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.95),
    color: color.red,
  },
  fontExtraSmallRedSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.95),
    color: color.red,
  },
  fontExtraSmallRedRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.95),
    color: color.red,
  },
  // font extra small
  // font very small
  fontVerySmallBlackBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.5),
    color: color.black,
  },
  fontVerySmallBlackSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.5),
    color: color.black,
  },
  fontVerySmallBlackRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.5),
    color: color.black,
  },
  fontVerySmallWhiteBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.5),
    color: color.white,
  },
  fontVerySmallWhiteSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.5),
    color: color.white,
  },
  fontVerySmallWhiteRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.5),
    color: color.white,
  },
  fontVerySmallGreyBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.5),
    color: color.grey,
  },
  fontVerySmallGreySemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.5),
    color: color.grey,
  },
  fontVerySmallGreyRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.5),
    color: color.grey,
  },
  fontVerySmallYellowBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.5),
    color: color.yellow,
  },
  fontVerySmallYellowSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.5),
    color: color.yellow,
  },
  fontVerySmallYellowRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.5),
    color: color.yellow,
  },
  fontVerySmallRedBold: {
    fontFamily: fonts.primary[700],
    fontSize: responsiveFontSize(1.5),
    color: color.red,
  },
  fontVerySmallRedSemiBold: {
    fontFamily: fonts.primary[600],
    fontSize: responsiveFontSize(1.5),
    color: color.red,
  },
  fontVerySmallRedRegular: {
    fontFamily: fonts.primary[400],
    fontSize: responsiveFontSize(1.5),
    color: color.red,
  },
  // font very small
});

export default styles;
