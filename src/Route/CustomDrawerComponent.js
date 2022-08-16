import React,{useState} from "react";
import {View,Text,TouchableOpacity,Modal,Dimensions,StyleSheet} from 'react-native'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import color from "../Constant/color";

const width= Dimensions.get('screen').width
const height=Dimensions.get('screen').height



const CustomDrawerComponent = (props) =>{

    const [showDialog, setShowDialog] = useState(false)
    return(
        <DrawerContentScrollView {...props}>
            <View style={{flex:1,padding:20,}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Booking')}>
                <Text style={{fontSize:18,color:color.black}}>Home</Text>
                </TouchableOpacity>


                <View >
                        <TouchableOpacity onPress={() =>{ props.navigation.closeDrawer()
             setShowDialog(true)}}
                        
                        style={{marginVertical:20}}>
                        <Text style={{fontSize:18,color:color.black}}>LogOut</Text>
                        </TouchableOpacity>
                    
                        <Modal animationType="none" transparent={true} visible={showDialog}>
                            <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',}}>
                                <View style={{backgroundColor:color.white,width:'90%',height:height/5-5,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:color.orange, fontSize:18, fontWeight:'bold',textAlign:'center',marginTop:5}}>Come Back Soon!</Text>
                                    <Text style={{color:color.black, fontSize:16, textAlign:'center',marginTop:5}}>Are you sure want to exit?</Text>

                                    <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
                                        <TouchableOpacity style={{width:100,height:50,backgroundColor:color.orange,borderRadius:10,}}>
                                            <Text style={{fontSize:16,fontWeight:'bold', textAlign:'center',color:color.white,}}>Yes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{width:100,height:50,backgroundColor:color.orange,borderRadius:10,}}>
                                            <Text style={{fontSize:16,fontWeight:'bold', textAlign:'center',color:color.white,}}>Cancel</Text>
                                        </TouchableOpacity>


                                    </View>
                                </View>

                            </View>

                        </Modal>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawerComponent

const styles =StyleSheet.create({

    modalContainer:{flex:1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent:'center',alignItems: 'center'},
        modalContent:{backgroundColor:color.white,padding:20, width: '90%',borderRadius:10},
        modalText:{fontSize:20, color:color.primaryColor,fontWeight:'bold',textAlign:'center'},
        exitText:{marginTop: 6, fontSize:16, color:color.darkGray,textAlign: 'center'},
        yesContainer:{marginTop:15, width:'100%', flexDirection:'row', justifyContent:'space-between'},
        yesContent:{borderRadius:10, width:'45%', backgroundColor:color.primaryColor,justifyContent:
        'center',alignItems:'center',paddingVertical:8},
        yesText:{color:color.white,fontWeight: 'bold',fontSize: 16},
})