



import React,{PureComponent} from 'react'
import {View,Text,ImageBackground} from 'react-native'
import {styles } from './style';

export class MilestoneComponent extends PureComponent{

    render(){
        return(
            <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%'}}>
          
            <View style={styles.container}>
                <Text>Milestones
                    </Text>
                </View>
                <Text>Inside</Text>
          </ImageBackground>
        )

    }
}