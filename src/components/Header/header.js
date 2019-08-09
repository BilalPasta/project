import React,{PureComponent} from 'react';
import {View,Text,Image} from 'react-native'
import {normalize} from '../../config'

class Header extends PureComponent{
    render(){
        return(
            <View style={{backgroundColor:'red',width:'100%',height:normalize(50)}}>
                <Text>Header
                    </Text>
                </View>
        )
    }
}


export default Header;