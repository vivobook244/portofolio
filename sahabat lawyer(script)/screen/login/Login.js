/* eslint-disable no-useless-escape */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {Content, Container, Icon, Toast} from 'native-base';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import Input from '../../assets/components/input/Input';
import Password from '../../assets/components/input/Password';
import LogoCircle from '../../assets/image/logo/logoCircle.svg';
import ButtonFull from '../../assets/components/button/buttonFull/ButtonFull';
import RegisterType from './components/RegisterType';
import API from '../../services/API';
import {setProfile} from '../../store/actions';
import fontStyles from '../../assets/styles/FontStyles';
import styles from './styles/StyeLogin';
import {color} from '../../assets/styles/ColorList';
import {Firebase} from '../../config';
import auth from '@react-native-firebase/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
      },
      showPassword: false,
      loading: false,
      registerPopup: false,
      phone: '',
      confirmResult: null,
      verificationCode: '',
      userId: '',
    };
  }

  onChangeFormData(value, type) {
    let formData = this.state.formData;
    formData[type] = value;
    this.setState({formData});
  }

  checkEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.formData.email)) {
      return Toast.show({
        text: 'Maaf, email anda tidak valid.',
        position: 'top',
        duration: 2000,
        style: styles.toast,
      });
    } else {
      return true;
    }
  }

  checkPassword() {
    const re = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
    if (!re.test(this.state.formData.password)) {
      return Toast.show({
        text: 'Maaf, password anda tidak valid.',
        position: 'top',
        duration: 2000,
        style: styles.toast,
        textStyle: fontStyles.fontExtraSmallWhiteRegular,
      });
    } else {
      return true;
    }
  }

  submitLogin() {
    if (this.checkEmail() && this.checkPassword()) {
      this.setState({loading: true});
      API.post('login', this.state.formData, {})
        .then(async response => {
          await AsyncStorage.setItem(
            'access_token',
            response.data.access_token,
          );
          this.loadProfile(response.data.access_token);
        })
        .catch(err => {
          this.setState({loading: false});
          return Toast.show({
            text: _.get(
              err,
              'response.data.message',
              'Something when wrong with our server.',
            ),
            position: 'top',
            duration: 2000,
            style: styles.toast,
            textStyle: fontStyles.fontExtraSmallWhiteRegular,
          });
        });
    }
  }

  loadProfile(access_token) {
    API.get('me', {
      headers: {
        Authorization: 'Bearer ' + access_token,
      },
    })
      .then(async response => {
        if (!response.data.image) {
          response.data.image =
            'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png';
        }
        this.props.setProfile(response.data);
        if (response.data.type === 'user') {
          this.props.navigation.navigate('Home');
        } else if (response.data.type === 'consultant') {
          this.props.navigation.navigate('HomeConsultant');
        }
        this.setState({loading: false});
      })
      .catch(err => {
        return Toast.show({
          text: _.get(
            err,
            'response.data.message',
            'Something when wrong with our server.',
          ),
          position: 'top',
          duration: 2000,
          style: styles.toast,
          textStyle: fontStyles.fontExtraSmallWhiteRegular,
        });
      });
  }

  async loginPhone() {
    console.log(this.state.formData.email);
    // auth.setLanguageCode('fr');
    // To apply the default app language instead of explicitly setting it.
    // auth.useAppLanguage();
    auth()
      .signInWithPhoneNumber(this.state.formData.email)
      .then(confirmResult => {
        this.setState({confirmResult});
        console.log('Sukses');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar
          backgroundColor={color.semiWhite}
          barStyle={'dark-content'}
        />
        <Content style={styles.content}>
          <View style={styles.containerLogo}>
            <LogoCircle width={100} height={100} />
          </View>
          <View style={styles.containerTitle}>
            <Text style={fontStyles.fontMediumBlackBold}>
              Masuk dan mulai berkonsultasi
            </Text>
          </View>
          <View style={styles.containerForm}>
            <Input
              type={'email'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              placeholder={'Email'}
              value={this.state.formData.email}
              onChangeText={(value, type) => this.onChangeFormData(value, type)}
            />
            <Password
              type={'password'}
              keyboardType={'default'}
              autoCapitalize={'none'}
              placeholder={'Password'}
              value={this.state.formData.password}
              onChangeText={(value, type) => this.onChangeFormData(value, type)}
              showPassword={this.state.showPassword}
              togglePassword={() =>
                this.setState({
                  showPassword: !this.state.showPassword,
                })
              }
            />
          </View>
          <View style={styles.containerRegisForget}>
            <View style={styles.containerRegister}>
              <Text
                onPress={() => {
                  // this.props.navigation.navigate('RegisterUser');
                  this.setState({registerPopup: true});
                }}
                style={[
                  fontStyles.fontExtraSmallGreySemiBold,
                  {textDecorationLine: 'underline'},
                ]}>
                Buat akun baru
              </Text>
            </View>
            <View style={styles.containerForgetPass}>
              <Text
                onPress={() => this.props.navigation.navigate('ForgetPassword')}
                style={fontStyles.fontExtraSmallGreySemiBold}>
                Lupa Password
              </Text>
            </View>
          </View>
          {/* <View style={styles.containerSocialMedia}>
            <TouchableOpacity>
              <Icon
                type="AntDesign"
                name={'google'}
                style={styles.iconSocialMedia}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type="AntDesign"
                name={'facebook-square'}
                style={styles.iconSocialMedia}
              />
            </TouchableOpacity>
          </View> */}
        </Content>
        <View style={styles.containerButton}>
          <ButtonFull
            disabled={false}
            color={color.yellow}
            action={() => this.submitLogin()}
            text={this.state.loading ? 'Loading ...' : 'Sign In'}
          />
        </View>
        <RegisterType
          close={() => this.setState({registerPopup: false})}
          registerPopup={this.state.registerPopup}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.profile,
  };
};

export default connect(
  mapStateToProps,
  {setProfile},
)(Login);
