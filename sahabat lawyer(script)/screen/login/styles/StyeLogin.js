import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import { color } from '../../../assets/styles/ColorList'
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.semiWhite
  },
  content: {
    paddingVertical: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(5)
  },
  containerLogo: {
    marginVertical: responsiveHeight(4)
  },
  containerTitle: {
    width: '50%',
    marginBottom: responsiveHeight(5)
  },
  containerForm: {
    marginVertical: responsiveHeight(3)
  },
  containerRegisForget: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerRegister: {
    width: '50%'
  },
  containerForgetPass: {
    width: '50%',
    alignItems: 'flex-end'
  },
  containerSocialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginVertical: responsiveHeight(3)
  },
  iconSocialMedia: {
    color: color.blue
  },
  containerButton: {
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(5)
  },
  toast: {
    backgroundColor: color.red
  }
})

export default styles
