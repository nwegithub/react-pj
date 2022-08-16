import React,{useState, useEffect} from "react";
import {View,Text,TouchableOpacity,Image,SafeAreaView,StyleSheet,Dimensions} from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import { auth } from "../../firebase";
import color from "../Constant/color";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector,useDispatch } from "react-redux";
import authAction from "../store/action/login"
import { set } from "react-native-reanimated";



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const SignInScreen = ({navigation,route}) =>{

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[rePassword, setRePassword] = useState('')

    const[emailValid, setEmailValid] = useState('')
    const[passValid, setPassValid] = useState('')
    const[rePassValid, setRePassValid] = useState('')
    
    const[isShowPass, setIsShowPass] = useState(true)
    const[isReShowPass, setIsReShowPass] = useState(true)

    const [passCheck, setPassCheck] = useState('')

    const dispatch = useDispatch()



    useEffect( () =>{
        const unsubscribe = auth.onAuthStateChanged(
            user =>{
                if(user){
                    navigation.navigate("SignUp")
                }
            }
        )
    },[])
    

    const handleSignUp = () =>{
        AsyncStorage.removeItem('coustName')
        dispatch(authAction.addToLoginData([]))

        if(name != '' && emailValid == '' && passValid == '' && rePassValid == '') {

        auth
            .createUserWithEmailAndPassword(email,password)

            .then(userCredentials => {

                const user = userCredentials.user;

                console.log(user.email)
            })
            .catch(error => alert(error.message))

            AsyncStorage.getItem('coustName').then((res) =>{

                const resData = JSON.parse(res)

                

                if(resData == null){

                    const nameArr = []

                    nameArr.push(name)

                    AsyncStorage.setItem('coustName', JSON.stringify(nameArr))
                    dispatch(authAction.addToLoginData(nameArr))

                }else{

                    resData.unshift(name)

                    AsyncStorage.setItem('coustName', JSON.stringify(resData))
                    dispatch(authAction.addToLoginData(resData))
                }
            })
            setName("")
            setPassword("")
            setEmail("")
            setRePassword("")

        }

    }


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
    


    const rePassValidation = (value) =>{


           
          if(value.length != 0 && value.length<7){

                setRePassValid('Password must be at least 8 digit')
            }
        else {
            setRePassValid('')
        }
      
    }

    const rePassCheck = (value) =>{
        if(value == password){
            setPassCheck('')
        }else{
            setPassCheck('please enter the same password')
        }
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../assets/icon/signin.jpg')}
                style={styles.contentimg}/>
            </View> 
                <View style={styles.content1}>

                    
                    <View style={styles.textinputview}>
                    <Input  
                    placeholder="Name" 
                    onChangeText={(val) =>setName(val)}
                    value={name}
                    style={styles.textinput}
                    
                    rightIcon={ <Image source={require('../../assets/icon/user.png')}
                    style={styles.inputimg}
                    />}
                    
                    />
                   
                    </View>

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


                        <View style={styles.textinputview}>
                    <Input  
                        placeholder="password" 
                        onChangeText={(val) => {setRePassword(val),
                                                rePassValidation(val),
                                                rePassCheck(val)}}
                        errorMessage={rePassValid}
                        errorMessage1={passCheck}
                        value={rePassword}
                        style={styles.textinput}

                   
                       
                        rightIcon={
                            isReShowPass ?

                            <TouchableOpacity onPress={() =>setIsReShowPass(false)}>

                                <Image source={require('../../assets/icon/lock.png')}
                            style={styles.inputimg}
                            />
                            </TouchableOpacity>


                            :
                            <TouchableOpacity onPress={() =>setIsReShowPass(true)}>

                                <Image source={require('../../assets/icon/openeye.png')}
                            style={styles.inputimg}
                            />
                            </TouchableOpacity>

                    
                    }
                        />

                       
                       
                        </View>
                       <View>
                        <Text>{passCheck}</Text>
                       </View>
                 

                    <TouchableOpacity onPress={ () => handleSignUp()}
                    style={styles.signinbutton}>
                        <Text style={styles.signintext}>Sign in</Text>
                    </TouchableOpacity>
                 
            </View>
        </SafeAreaView>
    )
}

 export default SignInScreen

 const styles = StyleSheet.create(
    {
    container : {justifyContent:'center', alignItems:'center',flex:1},
    content:{height:height/2-30,width:width,marginTop:0},
    contentimg:{width:'100%',height:'200%'},
    
    content1:{margin:18,backgroundColor:color.gray,width:width,flex:1,
                borderRadius:20,
                    justifyContent:'center',alignItems:'center',marginBottom:0},
    textinputview:{backgroundColor:color.white,width:'90%', height:50,
                    marginVertical:12, borderRadius:15, },
                    
    textinput:{fontSize:18,padding:10,borderRadius:10,borderBottomWidth:0
                },

    signinbutton:{backgroundColor:color.blue,width:'90%',height:50,borderRadius:10,
                justifyContent:'center',alignItems:'center',marginTop:8},
    signintext:{fontSize:18,fontWeight:'bold',textAlign:'center',color:color.white},
    inputimg:{width:25,height:25,marginTop:10},
    emailValidText:{fontSize:16,color:color.red,marginTop:5},
    
    
    }
 )