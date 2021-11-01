import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';
import {color} from '../assets/styles/ColorList';

// ***** Import Screen ***** //
// Splash Screen
import SplashScreen from '../screen/splash/Splash';

// Welcome Screen
import WelcomeScreen from '../screen/welcome/Welcome';

// Auth Stack
import LoginScreen from '../screen/login/Login';
import RegisterUserScreen from '../screen/registerUser/RegisterUser';
import RegisterConsultantScreen from '../screen/registerConsultant/RegisterConsultant';
import ForgetPasswordScreen from '../screen/forgetPassword/ForgetPassword';
import UploadFotoScreen from '../screen/uploadFoto/UploadFoto';

// Home Stack
import HomeScreen from '../screen/homeUser/HomeUser';
import ChatScreen from '../screen/chat';
import HomeConsultantScreen from '../screen/homeConsultant';
import TarikSaldoScreen from '../screen/tarikSaldo';
import ListConsultantScreen from '../screen/listConsultant/ListConsultant';
import ConsultantDetailScreen from '../screen/consultantDetail';
import ArticleDetailScreen from '../screen/articleDetail';
import InfoBankScreen from '../screen/tarikSaldo/InfoBank';
import InputRekeningScreen from '../screen/tarikSaldo/inputRekening';
import InputSaldoScreen from '../screen/tarikSaldo/inputSaldo';
import SuccessPayoutScreen from '../screen/tarikSaldo/successPayouts';

// Profile Stack
import ProfileScreen from '../screen/profile';
import SettingScreen from '../screen/settingScreen';
import ProfileConsultantScreen from '../screen/profileConsultant';
// import EditProfileScreen from '../screen/editProfile/EditProfile'
import EditProfileScreen from '../screen/editProfileUser/EditProfileUser';
import EditProfileConsultantScreen from '../screen/editProfileConsultant/EditProfileConsultant';
import ChangePasswordScreen from '../screen/changePassword/ChangePassword';

// List Chat Stack
import ListChatScreen from '../screen/listChat/ListChat';
// ***** /Import Screen ***** //

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  RegisterUser: {
    screen: RegisterUserScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  RegisterConsultant: {
    screen: RegisterConsultantScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  UploadFoto: {
    screen: UploadFotoScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
    },
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  ListConsultant: {
    screen: ListConsultantScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  ConsultantDetail: {
    screen: ConsultantDetailScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  ArticleDetail: {
    screen: ArticleDetailScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  ChangePassword: {
    screen: ChangePasswordScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

ProfileStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routeLength = navigation.state.routes.length;

  if (routeLength > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ListChatStack = createStackNavigator({
  ListChat: {
    screen: ListChatScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

ListChatStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routeLength = navigation.state.routes.length;

  if (routeLength > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Chat: ListChatStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Profile') {
          iconName = 'account';
        } else if (routeName === 'Chat') {
          iconName = 'message-processing-outline';
        }
        return (
          <Icon
            name={iconName}
            type="MaterialCommunityIcons"
            style={{color: tintColor, fontSize: 25}}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: color.themaColor,
      inactiveTintColor: 'gray',
      tabStyle: {
        borderTopWidth: 0,
      },
      style: {
        backgroundColor: '#FFFF',
        borderTopWidth: 0,
      },
    },
  },
);

const HomeConsultantStack = createStackNavigator({
  HomeConsultant: {
    screen: HomeConsultantScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: true,
    },
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  TarikSaldo: {
    screen: TarikSaldoScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  InfoBank: {
    screen: InfoBankScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  InputRekening: {
    screen: InputRekeningScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  InputSaldo: {
    screen: InputSaldoScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  SuccessPayout: {
    screen: SuccessPayoutScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

HomeConsultantStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routeLength = navigation.state.routes.length;

  if (routeLength > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ListChatConsultantStack = createStackNavigator({
  ListChat: {
    screen: ListChatScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

ListChatStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routeLength = navigation.state.routes.length;

  if (routeLength > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ProfileConsultantStack = createStackNavigator({
  Profile: {
    screen: ProfileConsultantScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditProfileConsultant: {
    screen: EditProfileConsultantScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  ChangePassword: {
    screen: ChangePasswordScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
  TarikSaldo: {
    screen: TarikSaldoScreen,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

ProfileConsultantStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routeLength = navigation.state.routes.length;

  if (routeLength > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabConsultantNavigator = createBottomTabNavigator(
  {
    Home: HomeConsultantStack,
    Chat: ListChatConsultantStack,
    Profile: ProfileConsultantStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Profile') {
          iconName = 'account';
        } else if (routeName === 'Chat') {
          iconName = 'message-processing-outline';
        }
        return (
          <Icon
            name={iconName}
            type="MaterialCommunityIcons"
            style={{color: tintColor, fontSize: 25}}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: color.themaColor,
      inactiveTintColor: 'gray',
      tabStyle: {
        borderTopWidth: 0,
      },
      style: {
        backgroundColor: '#FFFF',
        borderTopWidth: 0,
      },
    },
  },
);

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  AuthStack: AuthStack,
  Welcome: WelcomeScreen,
  TabNavigator: TabNavigator,
  TabConsultantNavigator: TabConsultantNavigator,
});

export default createAppContainer(AppNavigator);
