import React from "react"
import {View,Text,TouchableOpacity,Image,SafeAreaView} from 'react-native'
import color from "../Constant/color"
import HeaderComponent from "../Component/Headercomponent"
 

const ContactUsScreen = ({navigation,route}) =>{
    return(
        <SafeAreaView style={{flex:1,}}>
            <HeaderComponent navigation={navigation} title="Contact Us" iconName='back'/>
            <View style={{flex:1}}>
                <TouchableOpacity style={{padding:20,margin:10,borderRadius:10,backgroundColor:color.lightred}}>
                    <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Here if you want to contact us</Text>

                    <View style={{flexDirection:'row',marginVertical:10}}>
                        <View style={{width:30,height:30, }}>
                            <Image source={require('../../assets/icon/facebook.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                        <View style={{paddingLeft:10}}>
                            <Text style={{fontSize:18,fontWeight:'200'}}>www.facebook.com/booking.com</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',marginVertical:10}}>
                        <View style={{width:30,height:30, }}>
                            <Image source={require('../../assets/icon/phone.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                        <View style={{paddingLeft:10}}>
                            <Text style={{fontSize:18,fontWeight:'200'}}>09-946297924</Text>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',marginVertical:10}}>
                        <View style={{width:30,height:30, }}>
                            <Image source={require('../../assets/icon/twitter.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                        <View style={{paddingLeft:10}}>
                            <Text style={{fontSize:18,fontWeight:'200'}}>http://twitter.com/booking.com</Text>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',marginVertical:10}}>
                        <View style={{width:30,height:30, }}>
                            <Image source={require('../../assets/icon/gmail.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                        <View style={{paddingLeft:10}}>
                            <Text style={{fontSize:18,fontWeight:'200'}}>booking098@gmail.com</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                </View>

            

        </SafeAreaView>
    )
}
export default ContactUsScreen