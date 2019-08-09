import React from 'react';
import {View,Text,Button} from 'react-native'
export   class MenuStory extends React.PureComponent {

  render() {
//props
const {navigate}=this.props.navigation;

    return (
      <View><Text>MenuStory
          </Text>
          <Button title = {'go to itemDescription'} onPress={()=>navigate('itemDescriptionScreen')}/>

          </View>
    )
  }

}
