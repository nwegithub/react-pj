import React from "react"
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'
import color from "../Constant/color"

const Height = Dimensions.get('screen').height
const Width = Dimensions.get('screen').width



const MapViewScreen = ({navigation, route}) =>{
    return(
        <View style={styles.container}>
            <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >

            </MapView>
        </View>
    )
}
export default MapViewScreen


const styles = StyleSheet.create(
    {
       container:{
           flex:1
       },
       map:{
           width:Width,
           height:Height
       }
    }
)