import React from 'react';
import {View,Text,Button,ImageBackground} from 'react-native'
export   class CategoryStory extends React.PureComponent {

  render() {
const {navigate}=this.props.navigation;
    return (
      <ImageBackground source={require('../../assets/bg.jpg')} style={{flex:1}}>
      <View><Text>CategoryStory
          </Text>
          <Button title = {'go to Menu'} onPress={()=>navigate('menuSreen')}/>
          </View>
          </ImageBackground>
    )
  }

}

