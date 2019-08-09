
import React,{PureComponent} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {normalize} from '../../config';
import { tabBarIcons } from '../../constant/images';

class TabItem extends PureComponent{

    handlePress = () => {
        this.props.navigation.navigate(this.props.routeName);
      };
    render(){
        // const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];
      
// let  icon=`../../assets/${routeName}.png`
// console.log(icon,routeName)
        const { routeName, isActive } = this.props;

          const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];
        return(
            <View style={{flex:1,alignItems:'center',marginTop:normalize(10)}}>
                <TouchableOpacity onPress={this.handlePress}>

                 {routeName=="Home"?
                 <Image  source={icon} style={{width:normalize(60),height:normalize(60)}} />:                <Image source={icon} style={{width:normalize(30),height:normalize(30)}} />
                }  

                <Text style={{fontSize:normalize(10),color:isActive==true?'#fff':'#000',textAlign:'center' }} >{routeName}
                    </Text>

                    </TouchableOpacity>
                </View>
        )
    }
}

export default TabItem;