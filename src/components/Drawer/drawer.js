import React,{PureComponent} from 'react';
import {View,Text,SafeAreaView,ImageBackground,Image} from 'react-native';
import DrawerItem from './drawerItem';
import {normalize}  from '../../config'

class CustomDrawer extends PureComponent{
render(){

    const { navigation } = this.props;
    const { routes, index, isDrawerIdle } = navigation.state;

    console.log(navigation.state);
        // const { routes, index,isActive } = navigation.state;
    return(<SafeAreaView>
      <ImageBackground source={require('../../assets/drawer_topImage.jpg')} style={{width:'100%',height:normalize(210)}}>
       <View style={{flexDirection:'row',marginTop:normalize(100)}}>
         <View style={{width:normalize(100),height:normalize(100),borderRadius:normalize(50),backgroundColor:'#fff'}} >
         

          </View>

          <Text style={{flex:1,textAlign:'center',marginTop:normalize(50)}}>lknmkjnhkjn
          </Text>
          </View>
      </ImageBackground>
             {routes.map((route, i) => (
          <DrawerItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
          />
        ))}
            </SafeAreaView>
    )
}
}
export default CustomDrawer;