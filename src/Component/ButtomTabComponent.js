import React,{useEffect,useState} from "react";
import {View,Text,TouchableOpacity,Image,Dimensions} from 'react-native'
import color from "../Constant/color";
import qtyAction from "../store/action/qty"
import wishlistQtyAction from "../store/action/wqty"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSelector,useDispatch } from "react-redux";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const width = Dimensions.get('screen').width

const ButtonTabComponent = ({navigation,routename}) =>{

const qty = useSelector(state => state.Qty)

const wlQty = useSelector(state => state.Wqty)

const dispatch = useDispatch()

useEffect (() =>{

    async function getBkQty () {
        let bkQtyData = await AsyncStorage.getItem('bkListQty')
        let qty = JSON.parse(bkQtyData)
        if( qty == null){
            dispatch(qtyAction.setBkTotalQty(0))
            AsyncStorage.setItem('bkListQty', JSON.stringify(0))
        }else{
            dispatch(qtyAction.setBkTotalQty(qty))
            AsyncStorage.setItem('bkListQty', JSON.stringify(qty))
        }
    }
    getBkQty()

},[navigation,qty])



useEffect (() =>{

    async function getWlQty () {
        let wlQtyData = await AsyncStorage.getItem('wishlistQty')
        let qty1 = JSON.parse(wlQtyData)
        if( qty1 == null){
            dispatch(wishlistQtyAction.setWlQty(0))
            AsyncStorage.setItem('wishlistQty', JSON.stringify(0))
        }else{
            dispatch(wishlistQtyAction.setWlQty(qty1))
            AsyncStorage.setItem('wishlistQty', JSON.stringify(qty1))
        }
    }
    getWlQty()

},[navigation,wlQty])


    return(
        <View style={{flexDirection:'row',height:60,backgroundColor:color.white,paddingVertical:15}}>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}
            style={{width:width/4,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../assets/icon/home.png')} style={{width:20,height:20,tintColor: routename== 'Home' ? '#c27217' : 'gray'}}/>
                <Text style={{color: routename== 'Home'? '#c27217' :'gray',fontWeight:'bold',fontSize:16}}>Home</Text>
            </TouchableOpacity>


            

            <TouchableOpacity   onPress={ () => navigation.navigate('WishList')}
            style={{width:width/4,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../assets/icon/wishlist.png')} style={{width:20,height:20,tintColor: routename== 'Wishlist' ? '#c27217' : 'gray'}}/>


                {
               wlQty != 0 && 
                <View style={{
                position: 'absolute',
                 top: -5,
                right:0,
              
              borderRadius:11,
               marginRight: width /8 -22,width: 22, height:22, justifyContent:'center', alignItems:'center'
               ,backgroundColor:color.blue}}>
                   
                    <Text>{wlQty}</Text>
                </View>
            }


                <Text style={{color: routename== 'Wishlist'? '#c27217' :'gray',fontWeight:'bold',fontSize:16}}>wishlist</Text>
            </TouchableOpacity>




            <TouchableOpacity   onPress={ () => navigation.navigate('Profile')}
            style={{width:width/4,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../assets/icon/girl.png')} style={{width:20,height:20,tintColor: routename== 'Profile' ? '#c27217' : 'gray'}}/>
                <Text style={{color: routename== 'Profile'? '#c27217' :'gray',fontWeight:'bold',fontSize:16}}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity   onPress={ () => navigation.navigate('BookingList')}
            style={{width:width/4,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../assets/icon/bookinglist.png')} style={{width:20,height:20,tintColor: routename== 'BookingList' ? '#c27217' : 'gray'}}/>


            {
                qty != 0 && 
                <View style={{
                position: 'absolute',
                 top: -5,
                right:0,
              
              borderRadius:11,
               marginRight: width /8 -22,width: 22, height:22, justifyContent:'center', alignItems:'center'
               ,backgroundColor:color.darkblue }}>
                   
                    <Text>{qty}</Text>
                </View>
            }


                <Text style={{color: routename== 'BookingList'? '#c27217' :'gray',fontWeight:'bold',fontSize:16}}>BookingList </Text>
            </TouchableOpacity>

        </View>

    )
}
export default ButtonTabComponent