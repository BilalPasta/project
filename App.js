/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, AsyncStorage,ImageBackground} from 'react-native';
import firebase from 'react-native-firebase';

import RootStack from './src/pracice-components/navigation/stacknavigation';
import RecycleTestComponent from './src/pracice-components/layout/recyclerlistview';
import AppNavigator from './src/navigation/drawernavigation';
// import AboutUs from './src/screens/aboutUs/Aboutus-Story';
import {MilestoneComponent} from './src/components/Home/milestone';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {


  // buildNotification = () => {
  //   const title = Platform.OS === "android" ? "Daily Reminder" : "";
  //   const notification = new firebase.notifications.Notification()
  //     .setNotificationId("1") // Any random ID
  //     .setTitle(title) // Title of the notification
  //     .setBody("This is a notification") // body of notification
  //     .android.setPriority(firebase.notifications.Android.Priority.High) // set priority in Android
  //     .android.setChannelId("reminder") // should be the same when creating channel for Android
  //     .android.setAutoCancel(true); // To remove notification when tapped on it
  //     return notification;
  // };


  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners(); //add this line
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }


  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        console.log('fcmToken:', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    console.log('fcmToken:', fcmToken);
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }


  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      console.log('onNotification:');
      
    //     const localNotification = new firebase.notifications.Notification({
    //       sound: 'sampleaudio',
    //       show_in_foreground: true,
    //     })
    //     .setSound('sampleaudio.wav')
    //     .setNotificationId(notification.notificationId)
    //     .setTitle(notification.title)
    //     .setBody(notification.body)
    //     .android.setChannelId('fcm_FirebaseNotifiction_default_channel') // e.g. the id you chose above
    //     .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
    //     .android.setColor('#000000') // you can set a color here
    //     .android.setPriority(firebase.notifications.Android.Priority.High);

    //     firebase.notifications()
    //       .displayNotification(localNotification)
    //       .catch(err => console.error(err));
    // });

    // const channel = new firebase.notifications.Android.Channel('fcm_FirebaseNotifiction_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
    //   .setDescription('Demo app description')
    //   .setSound('sampleaudio.wav');
    // firebase.notifications().android.createChannel(channel);

    // /*
    // * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    // * */
    // this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
    //   const { title, body } = notificationOpen.notification;
    //   console.log('onNotificationOpened:');
    //   Alert.alert(title, body)
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      console.log('getInitialNotification:');
      Alert.alert(title, body)
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log("JSON.stringify:", JSON.stringify(message));
    });
  }


  render() {
    return (
    // <RootStack/>
    // <RecycleTestComponent/>
    // <MilestoneComponent/>
    // <ImageBackground source={require('./src/assets/bg.jpg')} style={{width:'100%',height:}}>
    <AppNavigator/>
    // </ImageBackground>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
