import React,{useState,useEffect} from "react"
import { View,Text,TouchableOpacity,Dimensions,Image,SafeAreaView,ScrollView} from 'react-native'
import color from "../Constant/color"
import HeaderComponent from "../Component/Headercomponent"
import ButtonTabComponent from "../Component/ButtomTabComponent"
import AsyncStorage from "@react-native-async-storage/async-storage"
import wishlistAction from "../store/action/wishlist"
import wishlistQtyAction from "../store/action/wqty"
import {useDispatch,useSelector} from 'react-redux'
import qty from "../store/action/qty"


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width



const facilitiesArr = [

{
    facilityImg: require('../../assets/icon/wifi.png'),
    facilityText: 'wifi'
},


{
  facilityImg: require('../../assets/icon/television.png'),
  facilityText: 'television'
},

{
  facilityImg: require('../../assets/icon/bottle.png'),
  facilityText: 'bottle'
},

{
  facilityImg: require('../../assets/icon/bathtub.png'),
  facilityText: 'bathtub'
},


]

const FacilitiesIcon = () =>{

    return(
      <View style={{flexDirection:'row',paddingLeft:17,paddingTop:17}}>


        {
          facilitiesArr.map((item,index) =>{
            return(
              <View key={index} style={{alignItems:'center'}}>
                <Image source={item.facilityImg} style={{width:30,height:30}}/>
                <Text style={{fontSize:16,marginTop:3,color:color.orange}}>{item.facilityText}</Text>

              </View>
            )
          })
        }
      </View>
    )
}



const HotelDetailScreen = ({navigation,route}) =>{

const {data} = route.params
const dispatch = useDispatch()
const [isInWishList, setIsInWishList] = useState(false)

const wqty = useSelector(state => state.Wqty)

// console.log(" Hotel Detail Data are......", data)



useEffect (() =>{
  AsyncStorage.getItem('wishlist').then((res) =>{
    const wishListData = JSON.parse(res)
    if(wishListData === null){
      setIsInWishList(false)
    }else{
      let isWishListId = null
      for(let i=0;i<wishListData.length; i++){
        if(wishListData[i]._id === data._id){
          isWishListId = data._id
        }
      }
      if(isWishListId !== null){
        setIsInWishList(true)
      }else{
        setIsInWishList(false)
      }
    }
  })
},[route])


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




const addToWishList = (wishlistItem) =>{


  wishlistItem.qty=1;


  let wishlistQty = wishlistItem.qty

 

  if(isInWishList){

    wishlistQty 

    console.log("wishlist qty", wishlistQty)

    
    AsyncStorage.getItem('wishlist').then((res)=>{
      const wishListData = JSON.parse(res)

      let leftData =[]


      if(wishListData != null){

        leftData = wishListData.filter(prod => prod._id != wishlistItem._id)
      }



      AsyncStorage.setItem('wishlist', JSON.stringify(leftData))
      dispatch(wishlistAction.addToWishList(leftData))

      AsyncStorage.setItem('wishlistQty',JSON.stringify(wqty-1) )
      dispatch(wishlistQtyAction.setWlQty(wqty-1))

      
      
    })
    setIsInWishList(false)


  }
  else{


  
   
    AsyncStorage.getItem('wishlist').then((res) =>{
      const wishListData = JSON.parse(res)

      let wishlistArr =[]

      if(wishListData == null){
        wishlistArr.push(wishlistItem)

        dispatch(wishlistAction.addToWishList(wishlistArr))
        AsyncStorage.setItem('wishlist', JSON.stringify(wishlistArr))


        dispatch(wishlistQtyAction.setWlQty(wishlistQty))
        AsyncStorage.setItem('wishlistQty',JSON.stringify(wishlistQty))


        

      }      
      else{
        
        let isWishListId = null

        for(let i=0; i<wishListData.length; i++){

          wishlistQty += wishListData[i].qty

          if(wishListData[i]._id == wishlistItem._id){

            isWishListId = wishlistItem._id

            wishListData[i].qty = qty+1


          }

        


        }
        
        
       if(isWishListId == null){
         wishListData.push(wishlistItem)
       }
       
       AsyncStorage.setItem('wishlist', JSON.stringify(wishListData))
       dispatch(wishlistAction.addToWishList(wishListData))


       AsyncStorage.setItem('wishlistQty',JSON.stringify(wishlistQty))
       dispatch(wishlistQtyAction.setWlQty(wishlistQty))

      
      }

      
      setIsInWishList(true)
    })
  }




  
}



  return(
    <View style={{flex:1}}>
      <HeaderComponent navigation={navigation} title='Hotel Detail' iconName='back'/>
      <ScrollView style={{flex:1,backgroundColor:'#e3fdff'}}>
      
      <View style={{height:height/3+5}}>
          {
            data.detailImg.map((item,index) => {
              return(
                <TouchableOpacity key={index}>
                  <Image style= {{width:'100%',height:'100%'}} source={item.img1}/>

                </TouchableOpacity>
              )
            })
          }
      </View>



      <View style={{flex:1, padding:20}}>
        <Text style={{color:color.black,fontSize:20, fontWeight:'bold'}}>{data.hotelname}</Text>

    <View style={{flexDirection:'row'}}>
        <View>
            <TouchableOpacity  onPress={ () => navigation.navigate('MapView')}
             style={{flexDirection:'row',paddingLeft:5,marginTop:15}}>
              
                  <View  style={{width:20,height:20 }}>
                    <Image source={require('../../assets/icon/location.png')} style={{width:'100%',height:'100%',tintColor:color.red}}/>
                  </View>


                  <View style={{marginLeft:5}}>
                    <Text style={{color:color.gray,fontSize:14,}}>{data.place}
                    <Text style={{color:color.red,}}>See on Map</Text></Text>
                  </View>
                  
            </TouchableOpacity>

            <View style={{flexDirection:'row', paddingLeft:5,marginTop:15}}>
                  <View style={{width:25,height:25}}>
                    <Image source={require('../../assets/icon/landmarkflag.png')} style={{width:'90%',height:'90%'}}/>
                  </View>
                  <View >
                    <Text style={{color:color.gray, fontSize:14}}>Strand Walking Street</Text>
                  </View>
            </View>
            <View style={{paddingLeft:10, marginTop:3,marginLeft:5}}>
                  <Text style={{fontSize:14, color:color.red,marginLeft:11,}}>See all NearBy Landmarks</Text>
            </View>

        </View>
        <TouchableOpacity  onPress={ () => addToWishList(data)}  style={{justifyContent:'center',alignItems:'center',
        flex:1,elevation:5,backgroundColor:"pink",}}>
          { isInWishList ?  
           <Image source={require('../../assets/icon/buy.png')} style={{width:25,height:25,tintColor:color.orange,}}/> 
          
          :
          <Image source={require('../../assets/icon/heart.png')} style={{width:35,height:35,tintColor:color.orange}}/>
          }
        </TouchableOpacity>
    </View>


        <View style={{height:1,backgroundColor:color.gray,marginVertical:10}}/>

        


        
        <View style={{marginTop:10}}>
          <Text style={{fontSize:18,color:color.black,fontWeight:'bold'}}>Amenities</Text>
        </View>
        <View style={{flexDirection:'row',paddingLeft:17,paddingTop:17}}>


                <View style={{width:40,height:40,borderRadius:50,backgroundColor:color.lightred,marginRight:15
                }}>
                  <Image source={require('../../assets/icon/reception.png')} style={{width:30,height:30}}/>
                </View>

                
                <View style={{width:40,height:40,borderRadius:50,backgroundColor:color.lightred, 
                  marginLeft:10,justifyContent:'center',alignItems:'center',marginRight:15}}>
                  <Image source={require('../../assets/icon/wifi.png')} style={{width:30,height:30}}/>
                </View>

                <View style={{width:40,height:40,borderRadius:50,backgroundColor:color.lightred, marginLeft:10
                ,justifyContent:'center',alignItems:'center'}}>
                  <Image source={require('../../assets/icon/toiletries.png')} style={{width:30,height:30}}/>
                </View>
          
        </View>

        <View style={{flexDirection:'row',paddingTop:5}}>
           <Text style={{color:color.gray,fontSize:15}}> Rectption</Text>
           <Text style={{color:color.gray,fontSize:15,marginLeft:7}}>Free Wifi</Text>
           <Text style={{color:color.gray,fontSize:15,marginLeft:7}}>Toiletries</Text>
        </View>

        <View style={{height:1,backgroundColor:color.gray,marginVertical:30}}/>

        <View >
          <Text style={{fontSize:18,color:color.black,fontWeight:'bold'}}>{data.hotelname} Service Guarantee</Text>
        </View>

        
        <FacilitiesIcon>
          <Text>Facilities and Amenities</Text>
        </FacilitiesIcon>


        <View >
          <Text style={{fontSize:18, color:color.gray}}>
            Recommended Rooms Type
          </Text>
          <View >
          <TouchableOpacity  onPress={ ()=> navigation.navigate('Booking',
          {
            data:data
          }

          )}
          style={{backgroundColor:color.orange,width:140,height:70,marginTop:5,
            justifyContent:'center',alignItems:'center',borderTopRightRadius:10,borderBottomLeftRadius:10}}>
            
            <Text style={{fontSize:16,fontWeight:'bold',}}>Book now</Text>
            
            </TouchableOpacity>
            </View>
          </View>
          

      </View>
      

      </ScrollView>
      <ButtonTabComponent navigation={navigation} routename={route.name}/>
      
    </View>
  )
}
export default HotelDetailScreen