import React,{PureComponent} from 'react';
import {Text,View,ImageBackground} from 'react-native'
import {normalize} from '../../config';
import TabItem from './tabItem';


class Tabbar extends PureComponent
{

    render(){
        const { navigation } = this.props;

        const { routes, index,isActive } = navigation.state;
       
    
return(        <ImageBackground resizeMode='stretch' source={require('../../assets/tabbar_back.png')} style={{width:'100%',height:normalize(100)}} >
 
        <View style = {
   {flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', //changed value of alignItems
    paddingTop:normalize(((70)/3)*0.9)
   }
  }>
         {routes.map((route, i) => (
          <TabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
          />
        ))}
          </View>
    </ImageBackground>
 )
    }
}



export default Tabbar;