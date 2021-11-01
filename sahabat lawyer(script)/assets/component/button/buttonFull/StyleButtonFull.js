import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
const styles = StyleSheet.create({
  containerButton: {
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(5)
  },
  subContainerButton: {
    paddingVertical: responsiveHeight(2),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
