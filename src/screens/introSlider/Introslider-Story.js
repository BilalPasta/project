import React from 'react';
import {View,Text,Button} from 'react-native'
export   class IntrosliderStory extends React.PureComponent {

  render() {
//props
const {navigate}=this.props.navigation;
    return (
      <View><Text>IntrosliderStory
          </Text>
          <Button title={'goto HomeStack'} onPress={()=>navigate('TabNavigator')}/>
          </View>
    )
  }

}
