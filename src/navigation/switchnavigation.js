import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
    CartStory, AboutusStory, MilestoneStory,
    SettingStory, OrderhistoryStory, HomeStory, itemDescriptionStory,
    MenuStory, SplashStory, InvitefriendsStory, LoginStory, SignupStory, CategoryStory, IntrosliderStory
  } from '../screens'

  import StackNavigator from './stacknavigation';
  import TabNavigator from './tabbanavigation';
  import DrawerNavigator from './drawernavigation';
const AppNavigator =createSwitchNavigator({
splahScreen,
introsliderScreen,

StackNavigator,
TabNavigator
})


export default createAppContainer(AppNavigator);