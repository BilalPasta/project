import React from 'react';
import {View,Text,Button,ImageBackground} from 'react-native'
export   class HomeStory extends React.PureComponent {

  render() {
    const {navigate}=this.props.navigation;
    return (
      <ImageBackground source={require('../../assets/bg.jpg')} style={{flex:1}}>
      <View><Text>HomeScreen
          </Text>
          <Button title={'go to milesone'} onPress={()=>navigate('milestonesScreen')}/>
          <Button title={'go to itemDescription'} onPress={()=>navigate('itemDescriptionScreen')}/>
          <Button title={'go to itemDescription'} onPress={()=>this.props.navigation.openDrawer()}/>

          </View>
          </ImageBackground>
    )
  }

}

