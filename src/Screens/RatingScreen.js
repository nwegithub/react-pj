import React, { useState } from "react"
import {View,Text,Modal,Image,TouchableOpacity,TextInput,StyleSheet} from 'react-native'

import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch,useSelector} from 'react-redux';
import ratingAction from "../store/action/rating"



import color from "../Constant/color"


const RatingReviewScreen = ({navigation,route}) =>{


  
    const [defaultRating,setDefaltRating] = useState(2)
    const [maximumRating, setMaximumRating] = useState([1,2,3,4,5])

    const starCorner= require('../../assets/icon/starCorner.png')
    const starFill = require('../../assets/icon/starFill.png')
    const [showDialog,setShowDialog] = useState(false)
    const [commentText, setCommentText] = useState('')
    // const [commentData, setCommentData] = useState('')

  const dispatch = useDispatch()

    let {hotelReview} =route.params


    const couName = useSelector(state => state.Auth)


const saveToRatingReviewList = (hotelReview) =>{

    hotelReview.commentText = commentText
    hotelReview.starCorner = starCorner
    hotelReview.starFill = starFill
    hotelReview.defaultRating = defaultRating
    hotelReview.maximumRating = maximumRating
    hotelReview.couName = couName
    

    AsyncStorage.getItem('reviewList').then((res) =>{

        let hotelRewData = JSON.parse(res)
        
        let hotelRewArr = []

        if(hotelRewData == null){

            hotelRewArr.push(hotelReview)

            AsyncStorage.setItem('reviewList',JSON.stringify(hotelRewArr))
            dispatch(ratingAction.addToRatingList(hotelRewArr))

        }
        else{
            hotelRewData.push(hotelReview)

            AsyncStorage.setItem('reviewList',JSON.stringify(hotelRewData))
            dispatch(ratingAction.addToRatingList(hotelRewData))
        }

    })


    setCommentText('')
    setDefaltRating(2)
}


    return(

                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
        
                         
                                
                                
                                    <View 
                                     animationType="none" transparent={true} visible={showDialog}>
                                        <View style={styles.modalContainer}>
                                            <View style={styles.modalContent}>
                                              

                                            <View>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                {
                                        maximumRating.map((item, key) =>{
                                            return(
                                                <TouchableOpacity
                                                activeOpacity={0.7}
                                                key={item} 
                                                onPress={ () => setDefaltRating(item)}
                                                >
                                                    <Image
                                                    style={{width:40,height:40}}
                                                    source={
                                                        item <= defaultRating ?
                                                        starFill
                                                        :
                                                        starCorner
                                                    }
                                                    
                                                    />

                                                </TouchableOpacity>
                                                
                                            )
                                        })
                                    }
                                    

                            </View>
                                        <View style={{justifyContent:'center', alignItems:'center',marginTop:10}}>
                                        <Text style={{fontSize:20}}>
                                            {defaultRating + '/' + maximumRating.length}
                                        </Text>
                                </View>


         



   </View>



                                       
                        
                                            <View style={styles.textinputContainer}>

                                            <TextInput
                                            placeholder=""

                                            onChangeText={(val) => setCommentText(val)}

                                            style={styles.textinput}
                                            // value={setCommentData}

                                            />

                                            </View>

                                                <View style={styles.modalContent1}>
                                                    <TouchableOpacity onPress={ () => setShowDialog(false)}
                                                    style={styles.btn}>
                                                        <Text style={styles.btnText}>Cancel</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity 
                                                    onPress={ () =>{saveToRatingReviewList(hotelReview),
                                                   navigation.navigate('RatingList') }}
                                                    style={styles.btn1}>
                                                        <Text style={styles.btnText}>Submit</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>

                                        </View>
                                    </View>
                               
                    </View>



    )
    }

export default RatingReviewScreen


const styles  = StyleSheet.create({
    modalContainer:{flex:1,justifyContent:'center', alignItems:'center',},

    modalContent:{width:300,height:400,borderRadius:10,backgroundColor:color.white, borderWidth:1,borderColor:"yellow"},

    modalContent1: {flexDirection:'row',justifyContent:'space-between',justifyContent:'center',
                    alignItems:'center'},

    btn: {width:80,height:40,backgroundColor:color.blue,borderRadius:10,marginBottom:10,marginRight:10,justifyContent:'center',alignItems:'center'}  ,

    btn1:{width:80,height:40,backgroundColor:color.blue,borderRadius:10,marginBottom:10,marginLeft:10, alignItems:'center',justifyContent:'center'}  ,

    btnText:{fontSize:16,fontWeight:'bold',color:"yellow"},

    textinput:{backgroundColor:'#dcdfe3',width:'85%',height:'70%'
                ,borderRadius:10,fontSize:18,borderWidth:1,borderColor:"yellow"},

    textinputContainer: {justifyContent:'center',alignItems:'center', }   
    
    
    
    
})