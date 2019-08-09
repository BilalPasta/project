import React from 'react';
import {View,Text,Button} from 'react-native'
export   class CartStory extends React.PureComponent {

  render() {
//props
const {navigation}=this.props;
    return (
      <View><Text>CartStory
          </Text>
          <Button title={'Open Drawer'} onPress={()=>navigation.openDrawer()}/>

          </View>
    )
  }

}

