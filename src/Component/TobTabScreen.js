import React from "react"
import {View,Text,TouchableOpacity,SafeAreaView} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import color from '../Constant/color'
import AccommodationScreen from "../Screens/AccommodationScreen"
import HelpScreen from "../Screens/HelpScreen"


const Tab = createMaterialTopTabNavigator();

const TopTabComponent = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Accommodation" component={AccommodationScreen}/>
            <Tab.Screen name="Help" component={HelpScreen}/>
        </Tab.Navigator>
    )
}

export default TopTabComponent