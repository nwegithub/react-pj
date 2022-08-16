import React from "react"
import {View,Text,TouchableOpacity,SafeAreaView} from 'react-native'
import TopTabComponent from "../Component/TobTabScreen"
import color from "../Constant/color"
import HeaderComponent from "../Component/Headercomponent";

const CustomerServiceScreen = ({navigation,route}) =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <HeaderComponent navigation={navigation} title="Customer Service" iconName='back'/>
            <View style={{flex:1, padding:10}}>
                <View >
                <TouchableOpacity style={{borderRadius:10,backgroundColor:color.white,  padding:20,marginTop:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Welcome to the Help Center</Text>
                <Text style={{fontSize:16,fontWeight:'bold',color: color.gray, marginTop:5}}>We are available 24 hours a day</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{borderRadius:10,backgroundColor:color.white, padding:20,marginVertical:20}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Frequently asked question</Text>
                </TouchableOpacity>
                </View>
            
                <TopTabComponent navigation={navigation}/>
                </View>
            

        </SafeAreaView>
    )
}
export default CustomerServiceScreen