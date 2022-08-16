import React,{useState} from "react";
import {View,Text,TouchableOpacity,ScrollView,Image,TextInput,Platform,Button,Picker,ImageBackground,ToastAndroid,Item,Input,Icon} from 'react-native'
import HeaderComponent from "../Component/Headercomponent";
import color from "../Constant/color";
import DatePicker from "@react-native-community/datetimepicker"
import listAction from '../store/action/list'
import qtyAction from '../store/action/qty'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch,useSelector} from 'react-redux';
import { StatusBar } from "expo-status-bar";
import PhoneInput from "react-native-phone-number-input";
import { PrivateValueStore } from "@react-navigation/native";




const BookingScreen = ({navigation,route}) =>{


    const {data} = route.params
    
    const dispatch = useDispatch()

    // console.log("data from home are...", data)

    
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');


    const [date1,setDate1] = useState(new Date());
    const [mode1, setMode1]= useState('date');
    const [show1,setShow1]= useState(false);
    const [text1,setText1] = useState('');

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [room, setRoom] = useState(1)
    const [guest, setGuest] = useState(1)
    const [child, setChild] = useState(0)
    const [isDateFocused, setIsDateFocused] = useState(true)

    const [isName, setIsName] = useState('')
    const [isEmail, setIsEmail] = useState('')
    const [isPhone, setIsPhone] = useState('')

    const [message, setMessage]= useState('')
    const [isValid, setIsValid] = useState('')
    

    
   
    
    const startDate = (event , selectedDate) =>{

        setShow(false)
        if(selectedDate){

        const currentDate = selectedDate || date ;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
        setText(fDate)
        

    }else{
         setText('')   
         setIsDateFocused(false)
         
        
    }
}



    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode   );

    
    }



    const endDate = (event, selectedDate1) =>{

        setShow1(false)
        if(selectedDate1){

        const currentDate1 = selectedDate1 || date1;
        setShow1(Platform.OS === 'ios');
        setDate1(currentDate1);

        let tempDate1 = new Date(currentDate1)
        let EDate = tempDate1.getDate() + '/' + (tempDate1.getMonth() +1) + '/' + tempDate1.getFullYear();
        setText1(EDate)
    }
    else{
        setText('')
        setIsDateFocused(false)
    }

}


    const showMode1 = (currentMode1) =>{
        setShow1(true);
        setMode1(currentMode1)
    }

    



    const plusRoom = () => { setRoom (room + 1)}

    const minusRoom = () => { 
        if(room >1){
            setRoom(room -1)
            
        }
    }


    const  plusGuest = () =>{ setGuest (guest + 1)}

    const minusGuest = () =>{
        if(guest >1){
            setGuest( guest -1)
            
        }
    }


    const plusChild = () =>{ setChild (child +1)}

    const minusChild = () =>{
        if(child >=1){
            setChild(child -1)
        }
    }



const saveToList = (data) =>{
    data.name = name
    data.email = email
    data.phone = phone
    data.room = room
    data.guest = guest
    data.child = child
    data.text =  text
    data.text1 = text1
    
    
    data.qty = 1
    data.filNum = 1
   

    AsyncStorage.getItem('list').then((res) =>{
        let listData = JSON.parse(res)
        let booking = []
        
       

        if(listData == null) {
            booking.unshift(data)


           
                    AsyncStorage.setItem('list', JSON.stringify(booking))
                dispatch(listAction.addToList(booking))
    
                AsyncStorage.setItem('bkListQty', JSON.stringify(1))
                dispatch(qtyAction.setBkTotalQty(1))

        }else{


            let isBookingList = null
            let bkTotQty = data.qty


            for(let i=0; i< listData.length; i++){
                bkTotQty  += listData[i].qty

         
            
                    }



                    
            if(isBookingList == null){


                listData.unshift(data)


                for(let i=0; i< listData.length; i++){
    
    
                    listData[i].filNum +=1
                    data.filNum += listData[i].filNum
                }
    
                
    
                console.log("index before adding", data.filNum)
                
            }

            else{
    
    
                        
                       
                        listData.unshift(data)
                       
                        
                        for(let i=0; i< listData.length; i++){
                            listData[i].filNum +=1
                            data.filNum += listData[i].filNum
                           
                        }
                    }
            

                    AsyncStorage.setItem('list', JSON.stringify(listData))
                    dispatch(listAction.addToList(listData))
            
                    AsyncStorage.setItem('bkListQty', JSON.stringify(bkTotQty))
                    dispatch(qtyAction.setBkTotalQty(bkTotQty))


                    
        }



     

    })

    

    


}

const clearData = () =>{
    setRoom(1);
    setGuest(1);
    setChild(0);

    setText('');
    setText1('');
    setEmail('');
    setPhone('');
    setName('');
}



const successfulToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Your order comfirmed",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };




  const unSuccessfulToast = () => {
      ToastAndroid.showWithGravityAndOffset(
          "You have to fill these first if you wanna log in",
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          25,
          50
      );
  };




  const pressHandler = () =>{
    if(name == ' ' || email == ' ' || phone == ' ' || room == ' ' || guest == ' ' || child== ' ' || text == ' ' || text1 == ' ' || setMessage == '' )
    {
      unSuccessfulToast()
      clearData()
    }
    
    else
    {
   
   
        saveToList(data)
            successfulToast()
            navigation.navigate('BookingList')
            clearData()
           
    }   
      
  }

  


 const  handleOnChange = (e) =>{
        setEmail(e.target.value);
  };



  const emailValidation = (val) =>{

   
      
      const reg = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
     if(val.length === 0){
         setMessage("Enter email address")
        
         
     }
     else if(reg.test(val) === false){

          setMessage("Email is not valid"),
          setIsValid('')
          
          
          
          
      } else if(reg.test(val) === true){
         
              
              setMessage("Email Valid"),
              setIsValid(false)
              
              
      
         
      }else {
         
              
          setMessage("Email Valid"),
          setIsValid(true)
          
          
      }
      
  }

  
  const TestCheckInDate = () =>{
    if(text == ''){
        failCheckInTost()
    }else{
        mode1('date')
        
    }
  }


  const failCheckInTost = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Please do check in date first",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };


    
    
  
    return(
        <ScrollView  style={{flex:1}}>
        <HeaderComponent navigation={navigation} title='Booking' iconName='back'/>
        {/* <ImageBackground  source={require('../../assets/icon/bridge.jpg')} style={{ width:'100%',height:'100%'}}> */}
        <View style={{padding:5,backgroundColor:'#e3fdff'}}>
            <Text style={{color:color.black,fontSize:16,fontWeight:'bold'}}>i'm booking for</Text>

        <View style={{flex:0.001,borderTopRightRadius:30,borderBottomLeftRadius:30,}}>
        <ImageBackground  source={require('../../assets/icon/hotel.jpg')}
        style={{borderTopRightRadius:30,borderBottomLeftRadius:30,elevation:5,padding:10,opacity:0.8}}>


            <View style={{width:'100%'}}>


                <View style={{flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                borderWidth: 0.6,
                                borderColor: isEmail ? '#1f6adb' : '#db1f22',
                                height: 55,
                                width:'100%',
                                borderRadius:10,
                                margin: 10,
                                paddingRight:5}}>
                <TextInput  
                placeholder="Email address" 
                onChangeText={ (val) =>{ setEmail(val);
                                        emailValidation(val)
                                        }}
                style={{fontSize:18,marginTop:25,padding:10,borderRadius:10, borderColor: isEmail ? '#1f6adb' : '#db1f22',flex:1, width:'100%',height:'100%',marginBottom:22,}}
                keyboardType='email-address'

                onFocus={ () =>{ setIsEmail(true)}}
                onBlur= { () =>{ setIsEmail( false)
                                    {email != '' && setIsEmail(true)}}}
                />
                {
                isValid  ?
                <Image source={require('../../assets/icon/true.png')} style={{padding: 10,
                                                                        margin: 5,
                                                                        height: 25,
                                                                        width: 25,
                                                                        resizeMode: 'stretch',
                                                                        alignItems: 'center',
                                                                        tintColor:color.blue}}/>
                
                :

                message === 'Email is not valid' ?
                
                <TouchableOpacity onPress={ () => setEmail('')}>
                <Image source={require('../../assets/icon/false.png')}
                                                                    style={{padding: 10,
                                                                        margin: 5,
                                                                        height: 25,
                                                                        width: 25,
                                                                        resizeMode: 'stretch',
                                                                        alignItems: 'center',
                                                                        tintColor:color.red}}/>
                 </TouchableOpacity>
                :
                null   

                }

            </View>
                
                <Text style={{color: isValid ? color.blue: color.red ,  fontSize:18,
              }}>{message}</Text>
              


                <TextInput  
                placeholder="Name" 
                onChangeText={ (val) => setName(val)}
                style={{fontSize:18,marginTop:35,  borderColor: isName ? '#73c7ff' : '#db1f22', borderWidth:1,padding:10,borderRadius:10,backgroundColor: '#fff',}}

                onFocus={ () =>{ setIsName(true)}}
                onBlur= { () =>{ setIsName( false)
                                    {name != '' && setIsName(true)}}}
                 />
                
                <View style={{flexDirection:'row'}}>

                    <PhoneInput
                    defaultCode='IN'
                    layout='first'
                    withDarkTheme
                    withShadow
                    />

                    <View style={{width:160}}>

                <TextInput  
                placeholder="Phone"
                onChangeText={ (val) => setPhone(val)} 
                style={{fontSize:18,marginTop:35,  borderColor: isPhone ? '#73c7ff' : '#db1f22', borderWidth:1,padding:10,borderRadius:10,backgroundColor: '#fff',}}

                onFocus={ () =>{ setIsPhone(true)}}
                onBlur= { () =>{ setIsPhone( false)
                                    {phone != '' && setIsPhone(true)}}}
                keyboardType='phone-pad'/>
                        </View>
                </View>
                
            </View>


                {
                    
                }

            <View style={{marginTop:30,flexDirection:'row'}}>
            
                <TextInput  onPressIn={ () => {showMode('date')
                TestCheckInDate()} }

                style={{fontWeight: 'bold', fontSize:20,color:color.orange, borderWidth:1,
                borderColor: isDateFocused? color.green : color.red,backgroundColor:color.white,
                borderRadius:10,textAlign:'center', width:150, height:50
            }}>{text}
            </TextInput>
                
            <TouchableOpacity onPress={ () => {showMode('date')
            TestCheckInDate()
        }} style={{marginLeft:20,}}>
                   <Image source={require('../../assets/icon/calendar.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>
             </View>
            {
                show && (
                    <DatePicker
                    testID='DatePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={startDate}
                    minimumDate={ new Date()}
                    
                    />
                )
            }  

            
        

        <View style={{marginTop:30,flexDirection:'row'}}>
                
                <TextInput       onPressIn={ () => showMode1('date1')}

                style={{fontWeight: 'bold', fontSize:20,color:color.orange,
                borderWidth:1,backgroundColor:color.white,borderRadius:10,
                borderColor: isDateFocused? color.green : color.red, width:150, height:50, textAlign:'center',

           
           }}>{text1}</TextInput>
 
                <TouchableOpacity onPress={ () => showMode1('date1')} style={{marginLeft:20,}}>
                   <Image source={require('../../assets/icon/calendar.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>
             </View>
            {
                show1 && (
                    <DatePicker
                    testID='DatePicker'
                    value={date1}
                    mode={mode1}
                    is24Hour={true}
                    display='default'
                    onChange={endDate}
                   minimumDate= {date}
                    
                    />
                )
            }  

    
        

<StatusBar style="auto"/>




</ImageBackground>
</View>


            <View style={{}}>
                <Text style={{fontSize:22,fontWeight:'bold',color:color.orange}}> Selected Room and Guest </Text>

                <View style={{ marginTop:15}}></View>
                    <View style={{flexDirection:'row',padding:5, }}>
                        <Text style={{fontSize:18, fontWeight:'bold',color:color.orange}}> Rooms</Text>
                        <TouchableOpacity onPress={ () => plusRoom()} style={{margin:5,paddingLeft:60}}>
                            <Image source={require('../../assets/icon/plus.png')} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:16,color:color.orange, margin:5}}>{room}</Text>
                        <TouchableOpacity onPress={ () => minusRoom()} style={{margin:5}}>
                            <Image source={require('../../assets/icon/minus.png')} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:1,backgroundColor:color.blue}}/>



                    <View style={{ marginTop:15}}></View>
                    <View style={{flexDirection:'row',padding:5, }}>
                        <Text style={{fontSize:18, fontWeight:'bold',color:color.orange}}> Guest</Text>
                        <TouchableOpacity onPress={ () => plusGuest()} style={{margin:5,paddingLeft:66}}>
                            <Image source={require('../../assets/icon/plus.png')} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:16,color:color.orange, margin:5}}>{guest}</Text>
                        <TouchableOpacity onPress={ () => minusGuest()} style={{margin:5}}>
                            <Image source={require('../../assets/icon/minus.png')} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:1,backgroundColor:color.blue}}/>



                    <View style={{ marginTop:15}}></View>
                    <View style={{flexDirection:'row',padding:5, }}>
                        <Text style={{fontSize:18, fontWeight:'bold',color:color.orange}}> Child</Text>
                        <TouchableOpacity onPress={ () => plusChild()} style={{margin:5,paddingLeft:70}}>
                            <Image source={require('../../assets/icon/plus.png')} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:16,color:color.orange, margin:5}}>{child}</Text>
                        <TouchableOpacity onPress={ () => minusChild()} style={{margin:5}}>
                            <Image source={require('../../assets/icon/minus.png')} style={{width:25,height:25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:1,backgroundColor:color.blue}}/>

            </View>


            

        

           
           


               <TouchableOpacity onPress={ () =>{ pressHandler()
                                                
                                                  
               
               }} 
               style={{height:50,backgroundColor:color.orange, marginTop:20,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                   <Text style={{fontSize:20, fontWeight:'bold',color:color.white}}>comfirm Booking</Text>


               </TouchableOpacity>


              
               </View>
            {/* </ImageBackground> */}
        </ScrollView>
    )
}
export default BookingScreen