import React,{Component} from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {View,Text,ImageBackground} from 'react-native';
import {
    CartStory, AboutusStory, MilestoneStory,
    SettingStory, OrderhistoryStory, HomeStory, itemDescriptionStory,
    MenuStory, SplashStory, InvitefriendsStory, LoginStory, SignupStory, CategoryStory
  } from '../screens'
import {HomeStack,MenuStack} from './stacknavigation'
import Tabbar from '../components/Tabbar/tabbar';



const TabNavigator = createBottomTabNavigator(
  {
   

    Menu:{
      screen:MenuStack
    },
  
    Cart:{
        screen:CartStory
    },
    Home:{
      screen:HomeStack
    },
    User:{
      screen:CartStory
  },
    Message: {
      screen: () => null,
      navigationOptions: {
        tabBarOnPress: () => {
          // do something custom here
        },
      },
      
  }
  },
  {
    tabBarComponent:(props)=>{
      return <View style={{
				position: 'absolute',
				left: 0,
				right: 0,
        bottom: 0,
        // backgroundColor:'red',
        borderTopEndRadius:10
			}}>
        {/* <ImageBackground resizeMode='stretch' source={require('../assets/tabbar_back.png')} style={{width:'100%',height:70}} > */}
 <Tabbar {...props}/> 
{/* </ImageBackground>  */}
        </View>
    },
    tabBarOptions: {
      style: {
        borderTopWidth: 0,
        backgroundColor:'red',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: 55,
        paddingBottom: 5,
      }
    },
    swipeEnabled: true,
    animationEnabled: true,
    // tabBarOptions: {
    //   activeTintColor: '#e91e63',
    //   inactiveTintColor: '#888',
    //   activeBackgroundColor: '#FFF', // iOS
    //   inactiveBackgroundColor: '#DDD', // iOS
    //   pressColor: '#e91e63', // Android
    //   indicatorStyle: { // Android
    //     backgroundColor: '#242134',
    //   },
    //   style: {
    //     backgroundColor: '#EEE', // Android
    //   },
    // },
  },
);

export  default createAppContainer(TabNavigator)