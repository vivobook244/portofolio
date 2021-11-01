import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import { color } from '../../styles/ColorList'
const styles = StyleSheet.create({
  containerInput: {
    marginBottom: 20
  },
  subContainerInput: {
    backgroundColor: color.white,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: 10
  },
  containerPassword: {
    flexDirection: 'row',
    marginBottom: 20
  },
  subContainerPassword: {
    backgroundColor: color.white,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: 10,
    width: '80%'
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    width: '20%'
  },
  icon: {
    color: color.grey,
    fontSize: 20
  }
})

export default styles
