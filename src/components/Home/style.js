import {StyleSheet} from 'react-native'
import {normalize,device} from '../../config'


export const styles=StyleSheet.create({
    container:{
        // backgroundColor:'black',
        // backgroundColor: 'transparent',
backgroundColor:'black',
        opacity:0.5,
        width:device.width,
        height:normalize(210),

        // borderWidth:normalize(3),
        // borderColor:'gray',
        borderRadius:normalize(5)
    }
})