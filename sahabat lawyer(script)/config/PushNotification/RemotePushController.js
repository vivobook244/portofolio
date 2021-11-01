import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification); // process the notification here
      },
      //CAlled when user failed
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
      //IOS Only
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      // Android only: GCM or FCM Sender ID
      senderID: '365804146467',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  return null;
};

export default RemotePushController;
