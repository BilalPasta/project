import React,{PureComponent} from 'react';
import {View,Text,SafeAreaView,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {drawerIcons} from '../../constant/images'
import {normalize} from '../../config';

class DrawerItem extends PureComponent{

    handlePress = () => {
        this.props.navigation.navigate(this.props.routeName);
      };
render(){
    const { routeName, isActive } = this.props;
    const icon = drawerIcons[isActive ? 'active' : 'inactive'][routeName];

    return(
        <TouchableOpacity onPress={this.handlePress} style={{marginBottom:normalize(20)}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Image source={icon} style={{width:normalize(40),height:normalize(40)}}  />
            <Text style={{textAlign:'center',fontSize:normalize(20),width:'80%'}} > {routeName}
                </Text>
                </View>
                </TouchableOpacity>
    )
}}



export default DrawerItem;