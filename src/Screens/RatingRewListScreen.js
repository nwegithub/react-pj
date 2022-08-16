import React,{useEffect,useState}  from "react";
import {View,Text,TouchableOpacity,FlatList,StyleSheet,style,Image,Dimensions} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSelector,useDispatch } from "react-redux";
import ratingAction from "../store/action/rating"
import { State } from "react-native-gesture-handler";
import color from "../Constant/color";
import authAction from "../store/action/login"


const RatingRewListScreen = ({navigation,route}) =>{

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const ratingRewData = useSelector(state => state.Rating)


const dispatch = useDispatch()

useEffect(() =>{

    const getData = async () =>{
        
        const rewDataList = await AsyncStorage.getItem('reviewList')

        const getRewDataList = JSON.parse(rewDataList)

        if(getRewDataList == null){

            AsyncStorage.setItem('reviewList', JSON.stringify([]))

            dispatch(ratingAction.addToRatingList([]))
            
        }
        else{

            AsyncStorage.setItem('reviewList', JSON.stringify(getRewDataList))

            dispatch(ratingAction.addToRatingList(getRewDataList))

            console.log('the data are......', getRewDataList)

        }
    }

    const getCoustName = async () =>{

        const nameList = await AsyncStorage.getItem('coustName')
        const getNameList = JSON.parse(nameList)

        if(getNameList == null){
            AsyncStorage.setItem('coustName',JSON.stringify([]))
            dispatch(authAction.addToLoginData([]))
        }
        else{
            AsyncStorage.setItem('coustName', JSON.stringify(getNameList))
            dispatch(authAction.addToLoginData(getNameList))
        }
    }

    getData()
    getCoustName()

},[route])

    return(
        <View style={{justifyContent:'center', alignItems:'center',flex:1,padding:20}}>
            <FlatList
            data={ratingRewData}
            renderItem= {({item, index}) =>{
                return(
                    <View key={index}
                    style={{backgroundColor:color.blue,width:width,height:height/6,borderRadius:10,margin:10,}}
                    >
                        <View style={{flexDirection:'row'}}>
                            {
                                item.maximumRating.map((i,index) =>{
                                    return(
                                        <TouchableOpacity 
                                        onPress={ () =>{ item.defaultRating}}
                                        key={index}>

                                            <Image style = {{width:50,height:50}} 
                                            source={ i <= item.defaultRating ?
                                                
                                            item.starFill
                                            :
                                            item.starCorner
                                            }/>

                                        </TouchableOpacity>
                                    )
                                })
                            }
                            
                        </View>
                        <View>
                                <Text style={{fontSize:18,fontWeight:'bold'}}>
                                   {item.couName}
                                </Text>
                            </View>
                            <View>
                                <Text style={{fontSize:14,fontWeight:'bold'}}>
                                   {item.commentText}
                                </Text>
                            </View>
                    </View>
                )
            }}
            keyExtractor= {(item,index) => index.toString()} 
            showsVerticalScrollIndicator={false}
            />
           
        </View>
    )
}

export default RatingRewListScreen