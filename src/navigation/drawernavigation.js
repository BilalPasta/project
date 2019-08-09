import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import {
  CartStory, AboutusStory, MilestoneStory,
  SettingStory, OrderhistoryStory, HomeStory, itemDescriptionStory,
  MenuStory, SplashStory, InvitefriendsStory, LoginStory, SignupStory, CategoryStory
} from '../screens'
import TabNavigator from './tabbanavigation';
import StackNavigator from './stacknavigation';
import {AuthStack} from './stacknavigation'
import React from 'react';
import {View} from 'react-native';
import CustomDrawer from '../components/Drawer/drawer';
import {normalize} from '../config'
 DrawerNavigator = createDrawerNavigator({
  Home:TabNavigator,

    InviteFriends: {
      screen: InvitefriendsStory,
    },
    Setting: {
      screen: SettingStory,
    },
    AboutUs:{
        screen:AboutusStory
    },
    Login:{
        screen:AuthStack
    },
    Cart:{
     screen: CartStory},
    Orders:{
      screen:OrderhistoryStory
    },
    // Stacks:StackNavigator 
  },{
    contentComponent:(props)=>  <CustomDrawer {...props}/> 
    ,drawerType :'slide'
    ,drawerWidth:normalize(350)
    
  });



  // export const AppNavigator=createAppContainer(DrawerNavigator);
export default     createAppContainer(DrawerNavigator);