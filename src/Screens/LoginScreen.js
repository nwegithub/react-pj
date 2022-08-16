import React,{useState, useEffect} from "react";
import {View,Text,TouchableOpacity,Image,SafeAreaView,StyleSheet,Dimensions} from 'react-native'
import color from "../Constant/color";
import { Input } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector,useDispatch } from "react-redux";
import { auth } from "../../firebase";
import signInAction from "../store/action/signinC"

const LoginScreen = ({navigation, route}) =>{

    const dispatch= useDispatch()

    
   
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[emailValid, setEmailValid] = useState('')
    const[passValid, setPassValid] = useState('')
    const[isShowPass, setIsShowPass] = useState(true)


    const emailValidation = (value) =>{

        const emailFormat = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

        if(emailFormat.test(value) === false){
            setEmailValid('Please enter valid email')
        }else{
            setEmailValid('')
        }

    }

    const passValidation = (value) =>{

        setPassValid('')

        if(value.length<7){

            setPassValid('Password must be at least 8 digit')
        }else{
            setPassValid('')
        }
        
    }





    const ToHandleSignIn = () => {

       let signInNum = 0

       AsyncStorage.getItem('countSignIn').then((res) =>{

             let signInData = JSON.parse(res)
                signInNum +=1

                signInData = signInNum

        AsyncStorage.setItem('countSignIn', JSON.stringify(signInData))
        dispatch(signInAction.addToCountSign(signInData))
       })

       auth.
       signInWithEmailAndPassword(email,password)
       .then(credentials =>{

        const user= credentials.user

        successfulSignIn()

        navigation.navigate('Drawer')

       })

       unSucessfulSignIn()

    }

    const successfulSignIn = () =>{
        ToastAndroid.showWithGravityAndOffset(

            "Sign in Successful!!!",

            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,  
            25,
            50


        )
    }

    const unSucessfulSignIn = () =>{
        ToastAndroid.showWithGravityAndOffset(

            "Sign in Successful!!!",

            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50


        )
    }
    
    
   return(

   <View style={styles.container}>
             <View style={styles.content}>


            <View style={styles.textinputview}>
                    <Input  
                        placeholder="Email" 
                        onChangeText={(val) =>{setEmail(val), 
                                                emailValidation(val)}}
                        value={email}
                    
                        style={styles.textinput}

                        keyboardType={"email-address"}

                        errorMessage={ <Text style={styles.emailValidText}>{emailValid}</Text>}

                        rightIcon={<Image source={require('../../assets/icon/email.png')}
                        style={styles.inputimg}
                        />
                    
                    }
                        />
                        
                        </View>


                        <View style={styles.textinputview}>
                    <Input  
                        placeholder="password" 
                        onChangeText={(val) =>{ setPassword(val),
                                                passValidation(val)}}
                        errorMessage={passValid}
                        value={password}
                        style={styles.textinput}

                        
                        secureTextEntry={isShowPass}
                        
                        rightIcon={ 
                           
                            
                           isShowPass  ?

                            
                            <TouchableOpacity onPress={() =>setIsShowPass(false)}>

                                <Image source={require('../../assets/icon/lock.png')}
                            style={styles.inputimg}
                            />
                            </TouchableOpacity>


                            :
                            <TouchableOpacity onPress={ () =>setIsShowPass(true)}>
                                 <Image source={require('../../assets/icon/openeye.png')}
                            style={styles.inputimg}
                            />
                            </TouchableOpacity>
                            
                        }
                            
                    
                        />

                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>

                            <View style={styles.letter}>
                        <Text>Don't you have an account? <Text style={styles.signupT}>Sign up here</Text></Text>
                        </View>
                        

            </View> 
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container :{flex:1, },
    content:{flex:1,backgroundColor:color.lightred, justifyContent:'center', alignItems:'center'
                 },
    button: {width:'90%',height:45, backgroundColor:color.blue, borderRadius:15, justifyContent:'center', alignItems:'center',marginTop:15},
    buttonText: {fontSize:18, fontWeight:'bold'},
    textinputview:{backgroundColor:color.white,width:'90%', height:50,
    marginVertical:12, borderRadius:15, },
    textinput:{fontSize:18,padding:10,borderRadius:10,borderBottomWidth:0
    },
    emailValidText:{fontSize:16,color:color.red,marginTop:5},
    inputimg:{width:25,height:25,marginTop:10},
    letter:{marginTop:15},
    signupT:{color:color.blue}
})