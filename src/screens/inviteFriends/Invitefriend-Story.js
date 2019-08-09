
import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';


export  class InvitefriendsStory extends Component {



    render() {
        const {navigation}=this.props;
        return (<View>
            <Text>
                InvitefriendsStory
            </Text>
            <Button title={'Open Drawer'} onPress={()=>navigation.openDrawer()}/>
        </View>)

    }
}