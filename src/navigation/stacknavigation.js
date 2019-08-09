import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  CartStory, AboutusStory, MilestoneStory,
  SettingStory, OrderhistoryStory, HomeStory, itemDescriptionStory,
  MenuStory, SplashStory, InvitefriendsStory, LoginStory, SignupStory, CategoryStory
} from '../screens'






 export const AuthStack = createStackNavigator(
  {
    loginScreen: {
      screen: LoginStory,
    },
    signupScreen: {
      screen: SignupStory,
    },
  },{
    headerMode:'none',
    initialRouteName:'loginScreen',
    defaultNavigationOptions:{
      headerVisible: false,

    }
  }
);


  export const HomeStack=createStackNavigator({
  homeScreen:{
    screen:HomeStory
  },
  milestonesScreen:{
    screen:MilestoneStory
  },
  itemDescriptionScreen:{
    screen:itemDescriptionStory
  }},{
    headerMode:'none',
    defaultNavigationOptions:{
      headerVisible: false,

    }
  }
)


 export  const MenuStack=createStackNavigator({
  categorySreen:{
    screen:CategoryStory
  },
  menuSreen:{
    screen:MenuStory
  },
  itemDescriptionScreen:{
    screen:itemDescriptionStory
  }
},{
  headerMode:'none',
  defaultNavigationOptions:{
    headerVisible: false,

  }
})

// export const AppNavigator = createAppContainer(HomeStack);
// export const AppNavigator=createAppContainer(MenuStack);
// export const AppNavigator=createAppContainer(AuthStack);


export default  StackNavigator=createStackNavigator({
  HomeStack:HomeStack,
  MenuStack:MenuStack,
  AuthStack:AuthStack
})