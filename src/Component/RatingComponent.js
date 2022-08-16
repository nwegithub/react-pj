import React,{useState} from "react"
import {View, Text,TouchableOpacity,Modal,TextInput,Image,StyleSheet} from 'react-native'
import color from "../Constant/color"

const RatingScreen = ({navigation,}) =>{



    const [defaultRating,setDefaltRating] = useState(2)
    const [maximumRating, setMaximumRating] = useState([1,2,3,4,5])

    const starCorner= 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
    const starFill = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'


 
    

    
    return(
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
                                {uri: starFill}
                                :
                                {uri: starCorner}
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
       
    )
}

export default RatingScreen


