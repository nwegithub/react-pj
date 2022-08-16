import React from "react";
import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native'
import color from "../Constant/color";

const HeaderComponent = ({navigation,iconName,title}) =>{
    return(
        <View style={{width:'100%',height:50,backgroundColor:color.white,flexDirection:'row',marginTop:30,paddingHorizontal:18,alignItems:'center'}}>
            {
                iconName == 'menu' ?
                <TouchableOpacity onPress={ () => navigation.toggleDrawer()} >
                    <Image source={require('../../assets/icon/menu.png')} style={{width:35,height:35,tintColor:color.orange}}/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={ () => navigation.goBack()}>
                    <Image source={require('../../assets/icon/forwardarrow.png')} style={{width:35,height:35,tintColor:color.orange}}/>
                </TouchableOpacity>

            }
            <Text style={{fontSize:18,fontWeight:'bold', color:color.orange, marginLeft:10}}>{title}</Text>

        </View>
    )
}
export default HeaderComponent