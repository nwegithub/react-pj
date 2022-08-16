import React,{useEffect,useState} from "react";
import {View,Text,TouchableOpacity,FlatList,Image,Dimensions} from 'react-native'
import HeaderComponent from "../Component/Headercomponent";
import color from "../Constant/color";
import {useSelector,useDispatch} from 'react-redux'
import wishlistAction from "../store/action/wishlist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import wishlistQtyAction from "../store/action/wqty"





const height = Dimensions.get('screen').height





const WishListScreen = ({navigation,route})=>{


    const HotelData  =  useSelector(state => state.WishList)
    const wishlistQty = useSelector(state => state.Wqty)
    const dispatch = useDispatch()

    
useEffect(() =>{
    async function getWishListProducts(){
        let wishlistData = await AsyncStorage.getItem('wishlist')
        let prods = JSON.parse(wishlistData)

        if(prods ===null){
            AsyncStorage.setItem('wishlist', JSON.stringify([]))
            dispatch(wishlistAction.addToWishList([]))
        }else{
            AsyncStorage.setItem('wishlist', JSON.stringify(prods))
            dispatch(wishlistAction.addToWishList(prods))
        }
    }
    getWishListProducts()
},[])



useEffect(() =>{
    async function getWishlistQty(){
        let wishlistQtyData = await AsyncStorage.getItem('wishlistQty')
        let qty = JSON.parse(wishlistQtyData)

        if(qty ===null){
            AsyncStorage.setItem('wishlistQty', JSON.stringify(0))
            dispatch(wishlistQtyAction.setWlQty(0))
        }else{
            AsyncStorage.setItem('wishlistQty', JSON.stringify(qty))
            dispatch(wishlistQtyAction.setWlQty(qty))
        }
    }
    getWishlistQty()
},[])


const removeWishListItem = (item) =>{
    AsyncStorage.getItem('wishlist').then((data) =>{
        let wishListData = JSON.parse(data)
        let leftWishList = [];
        if(wishListData != null){
            leftWishList = wishListData.filter(prod => prod._id != item._id)
        }
        dispatch(wishlistAction.addToWishList(leftWishList))
        AsyncStorage.setItem('wishlist',JSON.stringify(leftWishList))

        dispatch(wishlistQtyAction.setWlQty(wishlistQty-1))
        AsyncStorage.setItem('wishlistQty', JSON.stringify(wishlistQty-1))

       
    })
}


  
    return(
        <View style={{flex:1,}}>
            <HeaderComponent navigation={navigation} title="WishList" iconName='back'/>
            { HotelData?.length > 0 ?
             <View style={{flex:1, padding:18}}>
            <FlatList
            data={HotelData}
            renderItem={({item,index}) =>{
                return(
                    <View style={{padding:10,margin:8,backgroundColor:color.lightred,height:height/6,flexDirection:'row',borderRadius:10}}>
                        <View style={{width:110,height:110,borderRadius:10}}>
                           
                            <View>
                            <Image source={item.img} style={{width:'100%',height:'100%',borderRadius:5,}}/>
                            </View>
                            <TouchableOpacity  onPress={ () => removeWishListItem(item)}
                             style={{position:'absolute', top:-5, right:-2, width:30,height:30,}}>
                            <Image source={require('../../assets/icon/delete.png')} style={{width:'100%',height:'100%',tintColor:color.black}} />
                          </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:10}}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:color.black}}>{item.hotelname}</Text>
                            <Text style={{marginTop:5,fontSize:16,}}>{item.place}</Text>
                            <Text style={{marginTop:5,fontSize:16,}}>{item.price}</Text>
                        </View>

                       
                    </View>
                )
            }}
            keyExtractor={(item,index)=> index.toString()}
            showsVerticalScrollIndicator={false}
            />


</View> 

:
<View style={{justifyContent:'center', alignItems:'center' , flex:1}}>
    <Text>There is no wishlist data!</Text>
</View>

}
        </View>
    )
}
export default WishListScreen
