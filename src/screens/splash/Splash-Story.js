 import React from 'react';
import {View,Text,Button} from 'react-native'
export   class SplashStory extends React.PureComponent {

  render() {
//props
const {navigate}=this.props.navigation;
    return (
      <View><Text>SpashStory
          </Text>
          <Button title={'goto intro Slider'} onPress={()=>navigate('introsliderScreen')}/>
          </View>
    )
  }

}

