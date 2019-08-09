
import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';


export  class LoginStory extends Component {



    render() {
        const {navigate}=this.props.navigation;

        return (<View>
            <Text>
                LoginStory
            </Text>
            <Button title = {'go to Signup'} onPress={()=>navigate('signupScreen')}/>

        </View>)

    }
}