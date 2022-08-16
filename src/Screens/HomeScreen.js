import React,{useState} from "react"
import { View,Text,SafeAreaView,TouchableOpacity,FlatList,Dimensions,Image,TextInput} from 'react-native'
import color from "../Constant/color"
import HeaderComponent from "../Component/Headercomponent"
import ButtonTabComponent from "../Component/ButtomTabComponent"
import {SearchBar} from "react-native-elements"
import { Icon } from 'react-native-elements'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


const hotelData =[

  

  {
    _id : 0,
    title:"hotel1",
    img: require('../../assets/icon/attran.jpg'),
    hotelname:"Attran Hotel",
    place:"Mawlamyine",
    price:"70",
     
    detailImg : [
       
      {
        img1: require('../../assets/icon/bed1.jpg'),
        
        
      }
    ]

  },

  {
    _id : 1,
    img: require('../../assets/icon/zwekabin.jpg'),
    title:"room1",
    hotelname:"Zwe Ka Bin Hotel",
    place:"Hpa-an",
    price:"60",

    detailImg : [
      {
        img1: require('../../assets/icon/bed2.jpg'),
        
        
      }
    ]


  },

  {
    _id:2,
    img: require('../../assets/icon/thuwannabumi.jpg'),
    title:"bed1",
    hotelname:"Suvarnabhumi Hotel",
    place:"Thaton",
    price:"50",

    detailImg : [
       
      {
        img1: require('../../assets/icon/bed3.jpg'),
        
      }
    ]


  },

  {
    _id: 3,
    img: require('../../assets/icon/thuwannabumi.jpg'),
    title:"bathtub1",
    hotelname:"Suvarnabhumi Hotel",
    place:"Thaton",
    price:"50",

    detailImg : [
       
      {
        img1: require('../../assets/icon/bed4.jpg'),
       
        
      }
    ]


  },

  {
    _id:4,
    img: require('../../assets/icon/sea.jpg'),
    title:"sea1",
    hotelname:"Novotal Hotel",
    place:"Myawaidi",
    price:"50",

    detailImg : [
       
      {
        img1: require('../../assets/icon/bed3.jpg'),
        
      }
    ]


  },


  {
    _id:5,
    img: require('../../assets/icon/thuwannabumi.jpg'),
    title:"bed1",
    hotelname:"Suvarnabhumi Hotel",
    place:"Thaton",
    price:"50",

    detailImg : [
       
      {
        img1: require('../../assets/icon/bed3.jpg'),
        
      }
    ]


  },


  

]





const HomeScreen = ({navigation,route}) =>{


const [filteredData, setFilteredData]= useState([])
const [searchText, setSearchText] =useState('')
const [isInSearchText, setIsInSearchText] = useState(true)

const [noText, setNoText]= useState('')

  
const updateSearch = (text) =>{

 
  
  if(text){
    
    

      const newData = hotelData.filter(item =>{
      const itemData = item.hotelname.toLowerCase();
      const textData = text.toLowerCase()

      return itemData.indexOf(textData) > -1


    })
    setIsInSearchText(false)
    setSearchText(text)
    setFilteredData(newData)


    if(!newData.length){
      return setNoText('there is no data')
    }
  
   }
  
    
    else{
      setIsInSearchText(true)
      setSearchText('')
      setFilteredData([])
    }

    
}

  return(
    <View style={{flex:1}}>
      <HeaderComponent navigation={navigation} title='Home' iconName='menu'/>
    <View style={{padding:20, justifyContent:'center',flex:1,backgroundColor:'#e3fdff'}}>


    <View style={{borderRadius:20, backgroundColor: color.white, flexDirection:'row', padding:10, }}>
      <View style={{flexDirection:'row'}}>
      <Icon name="search"/>
    <TextInput
        style={{backgroundColor:color.white,borderRadius:10, width:'80%', fontSize:18}}
       
        placeholder="Type Here..."
        onChangeText={ updateSearch}
        value={searchText}
       
      />
      </View>
      <View style={{justifyContent:"center"}}>
      <Icon name="clear" onPress={ () => setSearchText('') }
      style={{}}/>
      </View>
      
      </View>

      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:color.black,fontSize:18,fontWeight:'bold'}}>Hotel</Text>
      </View>

    {
      isInSearchText ?
   


      <FlatList
      data={hotelData}
      renderItem= {({item,index}) =>{
        return(
          <View style={{padding:10,}}>
            <TouchableOpacity onPress={ () =>{navigation.navigate('HotelDetail',
            {
              data:item,
            }
            
            )}} style={{borderRadius:15, backgroundColor:color.white}}>
            <View style={{width:'100%',height:height/5,borderRadius:15}}>
              <Image source ={item.img} style={{width:'100%',height:'90%',borderTopLeftRadius:15,borderTopRightRadius:15}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <View>
              <Text style={{fontSize:20,fontWeight:'bold'}}>{item.hotelname}</Text>

              <View style={{flexDirection:'row'}}>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
              </View>

              <View style={{flexDirection:'row'}}>
                  <View>
                    <Image source={require('../../assets/icon/location.png')} style={{width:25,height:25,marginTop:5}}/>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                      <Text style={{fontSize:16,textAlign:'center'}}>{item.place}</Text>
                    </View>

              </View>
              </View>
              <View>
                <Text style={{color:color.orange,fontSize:25, fontWeight:'bold'}}>${item.price}</Text>
                <Text style={{marginTop:5}}>per night</Text>
              </View>
            </View>

          </TouchableOpacity>
          </View>
        )
      }}

      keyExtractor= {(item,index) => index.toString()} 
              showsVerticalScrollIndicator={false}
      />

      :  noText == 'there is no data' ?

          <View style={{flex:1}}><Text
          style={{color:color.red,fontSize:18}}>no data with this hotel name</Text></View>
      :

      
      <FlatList
      data={filteredData}
      renderItem= {({item,index}) =>{
        return(
          <View style={{padding:10,}}>
            <TouchableOpacity onPress={ () =>{navigation.navigate('HotelDetail',
            {
              data:item,
            }
            
            )}} style={{borderRadius:15, backgroundColor:color.white}}>
            <View style={{width:'100%',height:height/5,borderRadius:15}}>
              <Image source ={item.img} style={{width:'100%',height:'90%',borderTopLeftRadius:15,borderTopRightRadius:15}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <View>
              <Text style={{fontSize:20,fontWeight:'bold'}}>{item.hotelname}</Text>

              <View style={{flexDirection:'row'}}>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
                  <View>
                    <Image source={ require('../../assets/icon/star.png')} style={{width:25,height:25,tintColor:color.orange,marginTop:5}}/>
                  </View>
              </View>

              <View style={{flexDirection:'row'}}>
                  <View>
                    <Image source={require('../../assets/icon/location.png')} style={{width:25,height:25,marginTop:5}}/>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                      <Text style={{fontSize:16,textAlign:'center'}}>{item.place}</Text>
                    </View>

              </View>
              </View>
              <View>
                <Text style={{color:color.orange,fontSize:25, fontWeight:'bold'}}>${item.price}</Text>
                <Text style={{marginTop:5}}>per night</Text>
              </View>
            </View>

          </TouchableOpacity>
          </View>
        )
      }}

      keyExtractor= {(item,index) => index.toString()} 
              showsVerticalScrollIndicator={false}
      />

    }


    </View>
    <ButtonTabComponent navigation={navigation} routename={route.name}/>
    </View>
  )
}
export default HomeScreen