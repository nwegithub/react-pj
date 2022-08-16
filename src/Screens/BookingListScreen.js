import React, { useEffect ,useState} from "react";
import {View,Text,TouchableOpacity,Image, SafeAreaView,FlatList,Modal,TextInput} from 'react-native'
import HeaderComponent from "../Component/Headercomponent";
import color from "../Constant/color";
import listAction from "../store/action/list"
import qtyAction from "../store/action/qty";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useDispatch, useSelector} from 'react-redux'
import { State } from "react-native-gesture-handler";
import RatingComponent from '../Component/RatingComponent'







const BookingListScreen  = ({navigation,route,}) =>{


    const bookingData = useSelector(state => state.List)
    const bkTotQty = useSelector(state => state.Qty)
    
    const dispatch = useDispatch()

    console.log("list data are....", bookingData)



    const [showDialog, setShowDialog] = useState(false)
    

   
    useEffect (() =>{
        const getList = async () =>{
            let listData = await AsyncStorage.getItem('list')
            let ltDa = JSON.parse(listData)

           
            if( ltDa == null){
                dispatch(listAction.addToList([]))
                AsyncStorage.setItem('list', JSON.stringify([]))
                
            }else{
                dispatch(listAction.addToList(ltDa))
                AsyncStorage.setItem('list', JSON.stringify(ltDa))
            }
        }

        const getQty = async () =>{
            let bkListData  = await AsyncStorage.getItem('bkListQty')
            let qty = JSON.parse(bkListData)
  
             if (qty == null){
                 dispatch(qtyAction.setBkTotalQty(0))
                 AsyncStorage.setItem('bkListQty', JSON.stringify(0))
             }else{
                 dispatch(listAction.addToList(qty))
                 AsyncStorage.setItem('bkListQty', JSON.stringify(qty))
             }
        }
        getList()
        getQty()

    },[])




    const removeHotel = (item) =>{
      
       let leftBookingData = []


       AsyncStorage.getItem('list').then((res) =>{
           let bookingData = JSON.parse(res)

          
           if(bookingData == null){


            
            dispatch(listAction.addToList([]))
            AsyncStorage.setItem('list', JSON.stringify([]))
 
            dispatch(qtyAction.setBkTotalQty(0))
            AsyncStorage.setItem('bkListQty', JSON.stringify(0))

               
           }else{


            leftBookingData =bookingData.filter(book => book.filNum != item.filNum)


           dispatch(listAction.addToList(leftBookingData))
           AsyncStorage.setItem('list', JSON.stringify(leftBookingData))

           dispatch(qtyAction.setBkTotalQty(bkTotQty - 1))
           AsyncStorage.setItem('bkListQty', JSON.stringify(bkTotQty- 1))

           }

       })
    }






    return(
        <SafeAreaView style={{flex:1}}>
           <View style={{flex:1}}>
           
               <HeaderComponent navigation={navigation}  title="Booking List" iconName="back"/>
                
            
        {bookingData?.length >0 ?  <FlatList
                       data={bookingData}
                       renderItem={({item, index}) =>{
                           return(
                            <View style={{padding:20,flex:1,}}>



                           
                            <TouchableOpacity onPress={ () => navigation.navigate('HotelDetail',{ data: item})} style={{borderRadius:10,backgroundColor:color.white}}>
                                <View style={{borderTopLeftRadius:10,borderTopRightRadius:10,width:320,height:150}}>
                                
                                <Image source={item.img} resizeMode="cover" style={{width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                                    
                                </View>
                            


                                <TouchableOpacity  onPress={ () => removeHotel(item)}
                             style={{position:'absolute', top:-5, right:-2, width:30,height:30,}}>
                            <Image source={require('../../assets/icon/delete.png')} style={{width:'100%',height:'100%',tintColor:color.black}} />
                          </TouchableOpacity>

                          

                            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <View>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:color.gray}}>  <Text style={{fontSize:18,fontWeight:'bold',color:color.orange}}>Name:  </Text>  {item .name}</Text>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:color.gray}}>  <Text style={{fontSize:18,fontWeight:'bold',color:color.orange}}>Guest:  </Text>  {item .guest}</Text>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:color.gray}}>  <Text style={{fontSize:18,fontWeight:'bold',color:color.orange}}>Room :  </Text>  {item .room}</Text>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:color.gray}}>  <Text style={{fontSize:18,fontWeight:'bold',color:color.orange}}>Child:  </Text>  {item .child}</Text>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:color.gray}}>  <Text style={{fontSize:18,fontWeight:'bold',color:color.orange}}>Check In Date: </Text>  {item .text}</Text>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:color.gray}}>  <Text style={{fontSize:18,fontWeight:'bold',color:color.orange}}>Check Out Date: </Text>  {item .text1}</Text>
                                </View>

                                <TouchableOpacity onPress={ () => navigation.navigate('Rating',
                                {
                                    hotelReview: item
                                })
                                }
                                style={{alignItems:'flex-end',backgroundColor:color.blue,width:80,
                                height:40,justifyContent:'flex-end', borderBottomRightRadius:10,borderTopLeftRadius:10,marginTop:110}}>
                                    <Text style={{fontSize:16,fontWeight:'bold'}}>
                                        Please Rate
                                    </Text>
                                </TouchableOpacity>
                                

                            </View>    


                            </TouchableOpacity>




                            
                           
                        </View>
                           )
                       }}

                       keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <TouchableOpacity onPress={() => {
                            AsyncStorage.removeItem('list')
                            dispatch(listAction.addToList([]))
                            AsyncStorage.removeItem('bkListQty')
                            dispatch(qtyAction.setBkTotalQty(0))
                        }} style={{ marginVertical: 15, height: 50, backgroundColor: color.primaryColor, justifyContent: 'center', alignItems: 'center' }}>
                            
                            <Text style={{ color: color.white, fontSize: 16, fontWeight: 'bold' }}>comfirmed</Text>
                        </TouchableOpacity>
                    }

                       />
                       :
                       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>There is no hotel list</Text>
                </View>
                }
                    
                
                    </View>
               
                    
        </SafeAreaView>
        
    )
}
export default BookingListScreen