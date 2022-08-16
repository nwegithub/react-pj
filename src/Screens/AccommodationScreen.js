import React from "react"
import {View,Text,TouchableOpacity,SafeAreaView,Image,} from 'react-native'
import { ScrollView } from "react-native-gesture-handler"
import color from "../Constant/color"

const AccommodationScreen = () =>{
    return(
        <ScrollView showsVerticalScrollIndicator={false}
        style={{flex:1}}>
            <View style={{flex:1,padding:10}}>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Coronavirus-related support</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>

                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Cancellations</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Booking</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Payment</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Room types</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.black}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Credit card</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>

                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Property policies</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Extra |Facilities</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>








                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Coronavirus-related support</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Cancellations</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Booking</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Payment</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Room types</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Credit card</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>

                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Property policies</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:color.gray}}>Extra |Facilities</Text>
                    <Image source={require('../../assets/icon/forward.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:color.gray}}/>


                

            </View>
        </ScrollView>
    )
}
export default AccommodationScreen