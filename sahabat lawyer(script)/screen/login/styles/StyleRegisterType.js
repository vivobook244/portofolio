import {StyleSheet} from 'react-native';
import {color} from '../../../assets/styles/ColorList';
import {fonts} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  subContainer: {
    backgroundColor: color.whiteColor,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: color.fontColor,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  buttonConsultant: {
    width: '48%',
    backgroundColor: color.themaColor,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  textConsultant: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: color.whiteColor,
  },
  buttonUser: {
    width: '48%',
    backgroundColor: color.loaderBackgroundColor,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  textUser: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: color.whiteColor,
  },
});

export default styles;
