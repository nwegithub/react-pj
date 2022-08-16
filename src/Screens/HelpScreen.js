import React from "react"
import {View,Text,TouchableOpacity,SafeAreaView,Image} from 'react-native'
import color from "../Constant/color"

const HelpScreen = ({navigation, route}) =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, padding:10, justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity  onPress={ () => navigation.navigate('ContactUs')}
                style={{width:150,height:50,backgroundColor:color.green,
                     justifyContent:'center',alignItems:'center',borderTopRightRadius:10,borderBottomLeftRadius:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Contact us</Text>

                </TouchableOpacity>

            

            </View>
        </SafeAreaView>
    )
}
export default HelpScreen