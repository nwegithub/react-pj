import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity,Image,Dimensions,Modal} from 'react-native'
import color from '../Constant/color'
import HeaderComponent from "../Component/Headercomponent";
import ButtonTabComponent from "../Component/ButtomTabComponent"
import DatePicker from "react-native-datepicker";

const height = Dimensions.get('screen').height

const ProfileScreen  = ({navigation,route}) =>{

    const [startDate, setStartDate] =useState()
    const [endDate, setEndDate] =useState()

    const [showDialog, setShowDialog] = useState(false)

    return(
        <View style={{flex:1}}>
            <HeaderComponent navigation={navigation} title="Profile" iconName='back'/>
            <View style={{backgroundColor:color.orange, justifyContent:'center', alignItems:'center' , height:height/4 + 10}}>
                <View style={{ backgroundColor:color.green,width:60,height:60, justifyContent:'center',alignItems:'center' ,borderRadius:50}}>
                   <Image source={require('../../assets/icon/girl.png')}/>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{fontSize:18, fontWeight:'bold',color:color.white}}>Tin Nwe Aye</Text>
                </View>

            </View>


          

            <View style={{flex:1,padding:20, }}>
                <TouchableOpacity   onPress={ ()=> navigation.navigate('Home')}
                style={{flexDirection:'row',margin:15}}>
                    <View style={{width:30,height:30}}>
                        <Image source={require('../../assets/icon/home.png')} style={{width:'100%',height:'100%',}}/>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20,color:color.orange}}>Home</Text>
                    </View>

                </TouchableOpacity>


                <TouchableOpacity   onPress={ ()=> navigation.navigate('WishList')}
                style={{flexDirection:'row',margin:15}}>
                    <View style={{width:30,height:30}}>
                        <Image source={require('../../assets/icon/wishlist.png')} style={{width:'100%',height:'100%',}}/>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20,color:color.orange}}>WishList</Text>
                    </View>

                </TouchableOpacity>



                <TouchableOpacity   onPress={ ()=> navigation.navigate('HotelDetail')}
                style={{flexDirection:'row',margin:15}}>
                    <View style={{width:30,height:30}}>
                        <Image source={require('../../assets/icon/detail.png')} style={{width:'100%',height:'100%',}}/>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20,color:color.orange}}>Hotel Detail</Text>
                    </View>

                </TouchableOpacity>



                <TouchableOpacity   onPress={ ()=> navigation.navigate('Login')}
                style={{flexDirection:'row',margin:15}}>
                    <View style={{width:30,height:30}}>
                        <Image source={require('../../assets/icon/booking.png')} style={{width:'100%',height:'100%',}}/>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20,color:color.orange}}>Booking</Text>
                    </View>

                </TouchableOpacity>



                <TouchableOpacity   onPress={ ()=> navigation.navigate('CustomerService')}
                style={{flexDirection:'row',margin:15}}>
                    <View style={{width:30,height:30}}>
                        <Image source={require('../../assets/icon/question.png')} style={{width:'100%',height:'100%',}}/>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20,color:color.orange}}>Contact Customer Service</Text>
                    </View>

                </TouchableOpacity>

                <View style={{height:1,backgroundColor:color.orange,marginVertical:10}}/>


                <View >
                        <TouchableOpacity onPress={ () =>{navigation.closeDrawer() 
                            setShowDialog(true)}}>
                        <View style={{flexDirection:'row',margin:15 }}>
                            <Image source={require('../../assets/icon/logout.png')} style={{width:30,height:30, tintColor:color.gray}}/>
                            <Text style={{fontSize:20,color:color.orange,marginLeft:10}}>LogOut</Text>
                        </View>

                        </TouchableOpacity>
                        <Modal animationType="none" transparent={true} visible={showDialog}>
                            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>
                                <View style={{width:'80%',height:'20%',borderRadius:10,backgroundColor:color.white,padding:20}}>
                                <Text style={{fontSize:20,}}>Are you sure want to exit?</Text>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20,justifyContent:'space-around'}}>
                                    <TouchableOpacity style={{width:80,height:40,backgroundColor:color.orange,borderRadius:10}}>
                                        <Text style={{textAlign:'center',color:color.white,fontSize:18,fontWeight:'bold',marginTop:5}}> Yes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{width:80,height:40,backgroundColor:color.orange,borderRadius:10}}>
                                        <Text style={{textAlign:'center',color:color.white,fontSize:18,fontWeight:'bold',marginTop:5}}> No</Text>
                                    </TouchableOpacity>

                                </View>
                                </View>
                            </View>

                        </Modal>
                </View>


                

            </View>
            <ButtonTabComponent navigation={navigation} routename={route.name}/>
            
        </View>
    )
}
export default ProfileScreen